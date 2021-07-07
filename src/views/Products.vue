<template>
    <div>
        <h1>Products</h1>
        <table id="tasks" class="ui celled compact table">
            <thead>
            <tr>
                <th>  <i class="calendar plus icon"></i>Product</th>
                <th> <i class="info circle icon"></i>Description</th>
                <th> <i class="info circle icon"></i>Category</th>
                <th> <i class="info circle icon"></i>Price</th>
                <th> <i class="edit icon"></i></th>
                <th> <i class="trash icon"></i></th>
            </tr>
            </thead>
            <tr v-for="(product, i) in products" :key="i">
                <td>{{ product.title }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.price }}</td>
                <td width="75" class="center aligned">
                    <router-link :to="{ name: 'edit-product', params: { id: product._id, product }}">Edit</router-link>
                </td>
                <td width="75" class="center aligned" @click.prevent="onDestroy(product._id)">
                    <a :href="`/products/${product._id}`">Delete</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { api } from '../helpers/Helpers';
    export default {
        name: "products",
        data() {
            return {
                products: []
            };
        },
        methods: {
            async onDestroy(id) {
                const sure = window.confirm('Are you sure?');
                if (!sure) return;
                await api.deleteProduct(id);
                this.flash('product deleted sucessfully!', 'success');
                const newProduct = this.products.filter(product => product._id !== id);
                this.products = newProduct;
            }
        },
        async mounted() {
            this.products = await api.getProducts();
        }
    }
</script>

<style scoped>

</style>