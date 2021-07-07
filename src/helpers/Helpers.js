import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
});

const vm = new Vue();
const baseURL = 'http://localhost:4000/product/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
    });

export const api = {
    getProducts: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deleteProduct: handleError(async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createProduct: handleError(async payload => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updateProduct: handleError(async (payload, id) => {
        const res = await axios.patch(baseURL + id, payload);
        return res.data;
    })
};