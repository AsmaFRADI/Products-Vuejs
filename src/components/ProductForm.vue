<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out fields!</p>

        <div class="ui labeled input fluid">
            <div class="ui label">
               Product
            </div>
            <input type="text" placeholder="Enter Product name" v-model="product.title" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
               Category
            </div>
            <input type="text" placeholder="Enter Category" v-model="product.category" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                Description
            </div>
            <input type="text" placeholder="Enter Description" v-model="product.description" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                Price
            </div>
            <input type="text" placeholder="Enter Price" v-model="product.price" />
        </div>
        <button class="positive ui button">Submit</button>
    </form>
</template>

<script>
    export default {
        name: "product-form",
        props: {
            product: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        title: '',
                        category: '',
                        description: '',
                        price: ''
                    };
                }
            }
        },
        data() {
            return {
                errorsPresent: false
            };
        },
        methods: {
            onSubmit: function() {
                if (this.product.productName === '' || this.product.category === ''
                    || this.product.description === '' || this.product.price === '') {
                    this.errorsPresent = true;
                } else {
                    this.$emit('createOrUpdate', this.product);
                }
            }
        }
    }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>