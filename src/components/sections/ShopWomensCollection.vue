<template>
    <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-none lg:py-16">
                <h2 class="text-center font-philosopher font-bold text-brand text-2xl md:text-4xl">Women's Collections</h2>
                <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                    <div v-for="callout in callouts" :key="callout.name" class="group relative">
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
  
<script>

const callouts = [
    {
        name: 'Blazer',
        description: 'Work from home accessories',
        imageSrc: require("@/assets/img/shops/womens-blazer.jpeg"),
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/womens-blazer',
    },
    // {
    //     name: 'Celana & Rok',
    //     description: 'Journals and note-taking',
    //     imageSrc: require("@/assets/img/shops/womens-blazer.jpeg"),
    //     imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    //     href: '/womens-celana-dan-rok',
    // },
    
]
export default {
    name: 'ShopWomensCollection',
    data(){
        return {
            callouts
        }
    }
}
</script>