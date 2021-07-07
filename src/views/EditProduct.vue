<template>
    <div>
        <h1>Edit Produit</h1>
        <product-form @createOrUpdate="createOrUpdate" :product=product></product-form>
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
                product: {},
                updatedProduct: {}
            };
        },
        created(){
            this.product = this.$route.params.product;
        },
        methods: {
            createOrUpdate: async function(product) {
                this.updatedProduct = {
                    title: product.title,
                    description: product.description,
                    category: product.category,
                    price: product.price
                };
                await api.updateProduct(this.updatedProduct, product.id);
                this.$toastr.s("SUCCESS", "Product edited sucessfully");
                this.$router.push(`/products`);
            }
        }
    }
</script>

<style scoped>

</style>