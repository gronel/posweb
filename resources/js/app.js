import { createPinia } from 'pinia';
import { createApp, h  } from 'vue'
import { createInertiaApp, router } from '@inertiajs/vue3'
import Vue3Tour from 'vue3-tour'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from 'ziggy-js';
import 'vue3-tour/dist/vue3-tour.css'
import '@vuepic/vue-datepicker/dist/main.css' 
import Layout from './Layouts/LayoutAuthenticated.vue'
import axios from 'axios';
const appName = 'A-an';

const pinia = createPinia()

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Get CSRF token using vanilla JavaScript instead of jQuery
const csrfToken = document.querySelector('meta[name="csrf-token"]');
if (csrfToken) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.getAttribute('content');
}
window.axios.defaults.headers.withCredentials = true;
window.axios.defaults.headers.withXSRFToken = true;

createInertiaApp({
    title: (title) => `${appName}™ - ${title}`,
    resolve: async (name) => {
        const page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue"));
        page.default.layout =  (name.includes('Auth/') ) ?  null : Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(Vue3Tour)
            .use(ZiggyVue)
            .mount(el)
    },
    progress:{
        color: 'blue'
    }
})





