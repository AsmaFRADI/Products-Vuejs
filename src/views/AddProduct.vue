<template>
    <div>
        <h1>New Product</h1>
        <product-form @createOrUpdate="createOrUpdate"></product-form>

    </div>
</template>

<script>
    import ProductForm from "../components/ProductForm";
    import { api } from '../helpers/Helpers';

    export default {
        components: {
            'product-form': ProductForm,
        },
        name: "add-products",
        methods: {
            createOrUpdate: async function(product) {
                await api.createProduct(product);
                this.flash('product created', 'success');
                this.$router.push(`/products`);
            }
        }
    }
</script>

<style scoped>

</style>