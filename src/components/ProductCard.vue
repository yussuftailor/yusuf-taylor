<template>
    <!-- Router to detail page -->
    <!-- <router-link :to="'/detail/' + productData.productId"> -->
    <div class="w-full bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-red-200">
        <img class="rounded-t-lg" :src="productData.productImage" alt="" />
        <div class="p-4">
            <h5 class="text-base font-philosopher font-bold tracking-tight text-brand-black">{{
                productData.productName }}</h5>
            <p class="mt-1 mb-2 text-base font-philosopher text-brand-black w-full">{{ productData.productPrice }}</p>
            <div class="flex gap-1 md:gap-0 flex-col md:flex-row">
                <a :href="productData.productLink.shopee" target="_blank"
                    class="justify-center md:mt-4 w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-shopee rounded-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img src="@/assets/img/shops/shop-shopee.png" alt="">
                </a>
                <a :href="productData.productLink.tokopedia" target="_blank"
                    class="justify-center md:mt-4 w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-tokopedia rounded-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img src="@/assets/img/shops/shop-tokopedia.png" alt="">
                </a>
                <a :href="productData.productLink.zalora" target="_blank"
                    class="justify-center md:mt-4 w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zalora rounded-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <img src="@/assets/img/shops/shop-zalora.png" alt="">
                </a>
            </div>
        </div>
    </div>
    <!-- </router-link> -->
</template>

<script>

import router from '@/router';


export default {
    name: 'ProductCard',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        router
    },
    props: {
        productData: Array
    },
    methods: {
        // function to go tu detail
        // goTodetail() {
        //     this.$router.push({ name: 'detail', })
        // }
    }


};
</script>