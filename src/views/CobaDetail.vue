<template>
    <!-- <h1>Coba Detail Page {{ id }}</h1> -->
    <div class="grid grid-cols-2">
        <div>
            <img :src="productData.productImage" alt="">
            <div>
                <div class="w-8 h-8">
                    <img :src="productData.productImageSecond" alt="">
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <p class="text-brand font-philosopher font-bold text-3xl text-left">{{ productData.productName }}</p>
            <p class="font-philosopher font-bold text-xl text-left">{{ productData.productPrice }}</p>
            <!-- <p class="text-red">ini link zalora {{ productData.productLink.zalora }}</p> -->
            <!-- <a :href="productData.productLink.zalora" target="_blank">Zalora</a> -->
        </div>
    </div>
    <!-- Original -->
    <!-- <p>{{ id }}</p> -->
    <!-- <SocialMedia :id="id"/> -->
    <!-- <p class="text-red">ini nama baju {{ productData.productName }}</p>
    <p class="text-red">ini nama baju {{ productData.productPrice }}</p>
    <p class="text-red">ini link zalora {{ productData.productLink.zalora }}</p>
    <a :href="productData.productLink.zalora" target="_blank">Zalora</a>
    <img :src="productData.productImage" alt=""> -->
</template>
<script>

// eslint-disable-next-line no-undef
// const data = productData.filter((product)=>{return product.productId===props.id})[0]

export default {
    name: 'CobaDetail',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        // router
    },
    props: {
        productData: Object,
        id: String
    },
};
</script>
<!-- .filter((product)=>{return product.productId===id.value})[0] -->