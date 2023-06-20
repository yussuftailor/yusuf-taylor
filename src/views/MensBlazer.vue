<template>
    <div class="p-4 mx-auto max-w-7xl">
      <h2 class="mt-6 text-left font-philosopher font-bold text-brand text-2xl md:text-4xl">Men's Blazer</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8 mb-8">
        <div v-for="(mensBlazer, index) in mensBlazer" :key="index" class="">
          <ProductCard :productData="mensBlazer" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import ProductCard from '@/components/ProductCard.vue';
  import * as productDataTest from '../data.js'
  
  console.log(productDataTest.mensBlazer)
  
  
  export default defineComponent({
    name: 'MensBlazer',
    components: {
      ProductCard,
    },
    data() {
      return {
        mensBlazer: productDataTest.mensBlazer
      }
    }
  
  
  });
  </script>
  