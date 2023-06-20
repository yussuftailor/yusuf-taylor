<template>
    <ShopMensCollection />
    <ShopWomensCollection />
</template>

<script>
import ShopMensCollection from '@/components/sections/ShopMensCollection.vue'
import ShopWomensCollection from '@/components/sections/ShopWomensCollection.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Shop",
    components: {
        ShopMensCollection,
        ShopWomensCollection,
    }
}
</script>

<style></style>