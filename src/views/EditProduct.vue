<template>
    <div>
        <h1>Edit Produit</h1>
        <product-form @createOrUpdate="createOrUpdate" :product=this.product></product-form>
    </div>
</template>

<script>
    import ProductForm from "../components/ProductForm";
    import { api } from '../helpers/Helpers';
    export default {
        components: {ProductForm},
        name: "edit-product",
        data: function() {
            return {
                product: {}
            };
        },
        created(){
            this.product = this.$route.params.product;
        },
        methods: {
            createOrUpdate: async function(product) {
                await api.updateProduct(product);
                this.flash('product updated sucessfully!', 'success');
                this.$router.push(`/products`);
            }
        },
        async mounted() {
           // this.product = await api.getProduct(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>