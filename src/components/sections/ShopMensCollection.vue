<template>
    <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-none lg:py-16">
                <h2 class="text-center font-philosopher font-bold text-brand text-2xl md:text-4xl">Men's Colections</h2>
                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:space-y-0">
                    <div @click="goToDetailPage" v-for="callout in callouts" :key="callout.name" class="group relative">
                        <div
                            class="mb-3 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img :src="callout.imageSrc" :alt="callout.imageAlt"
                                class="h-full w-full object-cover object-top" />
                        </div>
                        <h3 class="mt-6 text-base font-bold font-philosopher text-gray-500">
                            <a :href="callout.href">
                                <span class="absolute inset-0" />
                                {{ callout.name }}
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Todo continue -->
  
<script>
// const = () => {
//     router.push({
//         path: '/'
//     })
// }


const callouts = [
    {
        name: 'Jas',
        description: 'Jas',
        imageSrc: require("@/assets/img/shops/mens-jas.jpeg"),
        imageAlt: 'Jas',
        href: '/mens-jas',
    },
    // {
    //     name: 'Kemeja',
    //     description: 'Kemeja',
    //     imageSrc: require("@/assets/img/shops/mens-kemeja.jpeg"),
    //     imageAlt: 'Kemeja',
    //     href: '/mens-kemeja',
    // },
    // {
    //     name: 'Celana',
    //     description: 'Celana',
    //     imageSrc: require("@/assets/img/shops/mens-jas.jpeg"),
    //     imageAlt: 'Celana',
    //     href: '/mens-celana',
    // },
    {
        name: 'Blazer',
        description: 'Blazer',
        imageSrc: require("@/assets/img/shops/mens-jas.jpeg"),
        imageAlt: 'Blazer',
        href: '/mens-blazer',
    },
    // {
    //     name: 'Jaket',
    //     description: 'Jaket',
    //     imageSrc: require("@/assets/img/shops/mens-jas.jpeg"),
    //     imageAlt: 'Jaket',
    //     href: '/mens-jaket',
    // },
]

export default {
    name: 'ShopMensCollection',
    data() {
        return {
            callouts,
            // click
        }
    },
    // methods: {
    //     router.push({name: "DetailPage"})
    // }

}
</script>