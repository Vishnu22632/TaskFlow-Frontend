import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import router from './router/index';


// import components
import  Button  from 'primevue/button';



// use services




const app = createApp(App);


app.use(PrimeVue,{
    theme:{
        preset: Aura
    }
});


app.component('Button',Button);


app.use(router);




app.mount('#app');


