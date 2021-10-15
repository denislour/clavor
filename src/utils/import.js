import { defineAsyncComponent } from 'vue';

export default function registerGlobalComponents(app) {
    app.component(
        'authenticated-layout',
        defineAsyncComponent(() => import('../layouts/Authenticated.vue'))
    );
}
