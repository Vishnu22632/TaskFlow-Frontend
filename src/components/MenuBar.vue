<template>
<div class="card">
    <Menubar :model="items"  style="font-size: 1.3em;"/>
</div>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { useRouter } from 'vue-router';

import {
    ref
} from "vue";

const router = useRouter();

const items = ref([{
        label: 'Home',
        icon: 'pi pi-home',
        command: () => router.push('/')
    },
    {
        label: 'Users',
        icon: 'pi pi-users',
        command: ()=> router.push('/users')
    },
    {
        label: 'Projects',
        icon: 'pi pi-folder',
        command: () => router.push('/projects')
    }, {
        label: 'Tasks',
        icon: 'pi pi-list-check',
        command: () => router.push('/tasks')
    },
    {
        label: 'Report',
        icon: 'pi pi-chart-line',
        command: () => router.push('/report')
    }

]);
</script>


