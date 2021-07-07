import Vue from 'vue'
import App from './App.vue'
import 'semantic-ui-css/semantic.css';
import router from './routes/Router';
// import plugin
import VueToastr from "vue-toastr";
// use plugin
Vue.use(VueToastr, {
    /* OverWrite Plugin Options if you need */
});
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
