<template>
    <!-- <div class="p-4 mx-auto xl:max-w-7xl lg:max-w-screen-lg md:max-w-screen-md"> -->
    <div class="p-4 mx-auto max-w-7xl">
      <h2 class="text-left font-philosopher font-bold text-brand text-2xl md:text-4xl">Jas</h2>
      <!-- <div v-for="(productData, index) in productData" :key="index" class="grid grid-cols-1 lg:grid-cols-3 gap-4"> -->
      <div v-for="(productData, index) in productData" :key="index" class="">
        <!-- <div class="grid grid-cols-1 gap-4 xsm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> -->
        <ProductCard :productData="productData" />
      </div>
      <!-- </div> -->
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import ProductCard from '@/components/ProductCard.vue';
  import * as productDataTest from '../data.js'
  // Vue.use(Vuex);
  
  console.log(productDataTest.productData)
  
  
  export default defineComponent({
    name: 'OriginalMensJas',
    components: {
      ProductCard,
    },
    data() {
      return {
        productData: productDataTest.productData
        // productData
        // productData: [
        //   { productId: "501", productName: "Himawan Jas Hitam", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp3.000.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "502", productName: "Boma Jas Biru", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp4.000.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "503", productName: "Bakuh Jas Hitam", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp4.000.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "504", productName: "Dumuwe Jas Tuxedo", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp3.000.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "505", productName: "Dungarees Blazer Pria", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp1.530.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "506", productName: "Gayatri Blazer Wanita", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp1.400.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "507", productName: "Laksmi Blazer Wanita", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp1.280.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "508", productName: "Pawitra Jas Putih Tulang", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp2.760.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "509", productName: "Sadarpa Jas Maroon", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp2.760.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "5010", productName: "Sena Jas Hitam", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp2.760.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "5011", productName: "Surdale Jas Abu-abu", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp5.600.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "5012", productName: "Wara Blazer Wanita", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp1.280.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        //   { productId: "5013", productName: "Aksamala Jas Perunggu", productLink: {zalora: "https://tokopedia.link/iznwoSTmAAb", tokopedia: "https://tokopedia.link/iznwoSTmAAb", shopee: "https://tokopedia.link/iznwoSTmAAb"}, productPrice: "Rp3.000.000", productImage: require("@/assets/img/products/product.jpeg"), productLinkTokped: "https://tokopedia.link/iznwoSTmAAb" },
        // ]
      }
    }
  
  
  });
  </script>
  