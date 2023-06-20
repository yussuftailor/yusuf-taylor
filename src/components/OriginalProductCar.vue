<template>
    <!-- <div v-for="(productData, index) in productData" :key="index"> -->
    <div>
        <!-- <a href="/detail"> -->
        <router-link :to="'/detail/'+ productData.productId">
            
            <div class="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-red-200">
                <!-- <router-link @click="$router.push(`/detail`)">

                </router-link> -->
                <!-- <a href="#"> -->
                    <img class="rounded-t-lg" :src="productData.productImage" alt="" />
                <!-- </a> -->
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-brand">{{
                            productData.productName }}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 w-full">{{ productData.productPrice }}</p>
                    <div class="flex gap-4">

                        <a :href="productData.productLinkTokped" target="_blank"
                            class="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Order
                        </a>
                        <a :href="productData.productLinkTokped" target="_blank"
                            class="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Order
                        </a>
                        <a :href="productData.productLinkTokped" target="_blank"
                            class="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Order
                        </a>
                    </div>
                </div>
            </div>
        </router-link>
        <!-- </a> -->
    </div>
</template>

<script>
import router from '@/router';
export default {
    name: 'OriginalProductCard',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        router
    },
    props: {
        productData: Array
    },
    // methods: {
    //     goTodetail() {
    //         this.$router.push({ name: 'detail', })
    //     }
    // }
};
</script>