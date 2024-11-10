<template>
<div class="user-container">

    <div class="flex justify-content-end p-6">
        <Button @click="openAddUserDialog" severity="info">ADD USER</Button>
    </div>

    <!-- **************************************User DataTable************************************** -->
    <div class="card" style="font-size: 1.2rem;">
        <DataTable 
        :value="users"
        :lazy="true"
        paginator 
        :rows="rowsPerPage" 
        :first="first"
        :totalRecords="totalRecords" 
        @page="onPage"
        :rowsPerPageOptions="[5,10, 20, 30]" 
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        tableStyle="min-width: 50rem">
           
        <Column field="id" header="ID"></Column>
            <Column field="fullName" header="FULLNAME"></Column>
            <Column field="email" header="EMAIL"></Column>
            <Column field="password" header="PASSWORD"></Column>
            <Column field="address" header="ADDRESS"></Column>

            <Column  header="ACTION">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" @click="editUser(slotProps.data)" class="p-button-primary" ></Button>
                    <Button icon="pi pi-trash" @click="deleteUser(slotProps.data.id)" class="p-button-danger m-1"></Button>
                    <Button icon="pi pi-eye" class="p-button-info"></Button>
                </template>
                
            </Column>

            
        </DataTable>
        
       

    </div>

    <!-- **************************************User Dialog************************************** -->
    <Dialog v-model:visible="visible" modal :header="isEditMode ? 'EDIT USER': 'ADD USER'" :style="{ width: '35rem' }">

        <Form>

            <div class="flex items-center gap-3 mb-4">
                <label for="username" class="font-semibold w-24">FullName :</label>
                <InputText id="username" v-model="user.fullName" class="flex-auto" required autocomplete="off" />
            </div>
            

            <div class="flex items-center gap-6 mb-4">
                <label for="email" class="font-semibold w-24">Email :</label>
                <InputText id="email" v-model="user.email" class="flex-auto" autocomplete="off" />
            </div>

            <div class="flex items-center gap-4 mb-4">
                <label for="password" class="font-semibold w-24">Password : </label>
                <InputText id="password" v-model="user.password" type="password" class="flex-auto" autocomplete="off" />
            </div>

            <div class="flex items-center gap-4 mb-4">
                <label for="address" class="font-semibold w-24">Address :</label>
                <InputText id="address" v-model="user.address" class="flex-auto" autocomplete="off" />
            </div>

            <div class="flex justify-content-center gap-2">
                <Button type="button" label="Cancel" severity="danger" @click="visible = false">Cancel</Button>
                <Button type="button" label="Save" severity="info" @click="saveUser">{{ isEditMode ? 'Update' : 'Save' }}</Button>
            </div>

        </Form>
    </Dialog>

</div>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue';

import UserService from '../services/UserService';

const users = ref([]);
const visible = ref(false);
const isEditMode = ref(false);
const rowsPerPage = ref(5);
const currentPage = ref(0);
const totalRecords = ref(0);
const first = ref(0);



const loadUsers = (page = 0, size = rowsPerPage.value)=>{
    UserService.getAllUsers(page,size).then(response =>{
        users.value = response.data.content;
        totalRecords.value = response.data.totalElements;
    });
};

const onPage = (event) =>{
    currentPage.value = event.page;
    rowsPerPage.value = event.rows;
    first.value = currentPage.value * rowsPerPage.value; 
    loadUsers(currentPage.value,rowsPerPage.value);
};

const user = ref({
    fullName: '',
    email: '',
    password: '',
    address: ''
});

const openAddUserDialog = () =>{
    resetUser();
    isEditMode.value = false;  // Add Mode
    visible.value = true;
}

const resetUser = () =>{
    user.value = {
        fullName: '',
        email: '',
        password: '',
        address: ''
    }

};

const editUser = (userData) =>{
    user.value = {...userData};
    isEditMode.value = true;    // Edit Mode
    visible.value = true;
}


const closeDialog = () =>{
    visible.value = false;
    resetUser();
}




const saveUser = () =>{
    if(isEditMode.value){
        UserService.updateUser(user.value.id,user.value).then(()=>{
            loadUsers(currentPage.value,rowsPerPage.value);
            closeDialog();
        });
    }else{
        UserService.saveUser(user.value).then(()=>{
            loadUsers(currentPage.value,rowsPerPage.value);
            closeDialog();
        })
    }
}



const deleteUser = (userId) =>{
    UserService.deleteUser(userId).then(()=>{
        loadUsers(currentPage.value,rowsPerPage.value);
    })
}



onMounted(() => {
    loadUsers(currentPage.value, rowsPerPage.value);
    
});
</script>
