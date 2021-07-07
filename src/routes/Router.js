import Vue from 'vue';
import Router from 'vue-router';
import Products from '../views/Products';
import AddProduct from '../views/AddProduct';
import EditProduct from '../views/EditProduct';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/products'
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/products/addProduct',
            name: 'add-product',
            component: AddProduct
        },
        {
            path: '/products/:id/edit',
            name: 'edit-product',
            component: EditProduct
        }

    ]
});