import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import router from './router/index';


// import components
import  Button  from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { Form } from '@primevue/forms';
import Paginator from 'primevue/paginator';


// use services




const app = createApp(App);


app.use(PrimeVue,{
    theme:{
        preset: Aura
    }
});


app.component('Button',Button);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('Dialog',Dialog);
app.component('InputText',InputText);
app.component('Form',Form);
app.component('Paginator',Paginator);

app.use(router);




app.mount('#app');


