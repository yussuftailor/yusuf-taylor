<template>
    <div class="p-4 mx-auto max-w-7xl">
      <h2 class="mt-6 text-left font-philosopher font-bold text-brand text-2xl md:text-4xl">Men's Jaket</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8 mb-8">
        <div v-for="(mensJaket, index) in mensJaket" :key="index" class="">
          <ProductCard :productData="mensJaket" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import ProductCard from '@/components/ProductCard.vue';
  import * as productDataTest from '../data.js'
  
  console.log(productDataTest.mensJaket)
  
  
  export default defineComponent({
    name: 'MensJaket',
    components: {
      ProductCard,
    },
    data() {
      return {
        mensJaket: productDataTest.mensJaket
      }
    }
  
  
  });
  </script>
  