<template>
    <!-- <h1>Coba Detail Page</h1> -->
    <!-- <p>{{ $route.params.id }}</p> -->
    <!-- <SocialMedia :id="id"/> -->
    <!-- <p>{{ data?.productName}}</p> -->
    <CobaDetail :productData="data.filter((product)=>{return product.productId===$route.params.id})[0]" :id="$route.params.id" />
    <!-- <p>{{ data }}</p>
    <p>{{ data }}</p> -->
</template>
<script>

// import { routeLocationKey } from 'vue-router'
// import { onMounted } from 'vue'
import * as productDataTest from '../data.js'
import CobaDetail from '@/views/CobaDetail.vue'


// import { useRoute } from 'vue-router';
// import { computed } from 'vue';
// import SocialMedia from '../components/SocialMedia.vue';

// const route = useRoute()
// const pathId = computed<string>(()=>(route.params.id as string))

// eslint-disable-next-line no-undef
// const rute = route.params
// console.log(data)
// eslint-disable-next-line no-undef
// onMounted(()=>{
//     console.log(window.location.pathname.split('/')[2])
// })
// const id = computed(async()=>{
    // window.location.reload()
    // return await window.location.pathname.split('/')[2]
// })

// console.log(id.value)
const data = productDataTest.productData
console.log(data)



export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Detail",
    components: { CobaDetail },
    data(){
        return{
           data 
        } 
    }
}
</script>
<style></style>