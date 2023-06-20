<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-7xl lg:mx-0">
                <h2 class="text-left font-philosopher font-bold text-brand text-2xl md:text-4xl">Media Sosial</h2>
                <p class="text-left mt-4 font-philosopher text-base max-w-2xl">Temukan kami di social media.</p>
                <p>{{ id }}</p>
            </div>
            <div class="mt-8 h-px bg-brand bg-opacity-25 w-full"></div>
            <div class="w-fit">


                <div 
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div class="relative mt-6 flex items-center gap-x-4" v-for="(socialData, index) in socialData"
                        :key="index">
                        <img :src="socialData.mediaLogo" alt="" class="h-10 w-10 bg-gray-50" />
                        <div class="text-sm leading-6">
                            <p class="text-left font-philosopher font-semibold text-gray-900">
                                <a href="#">
                                    <span class="absolute inset-0" />
                                    {{ socialData.mediaId }}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ContactSocialMedia",
    props: {
        socialData: Array,
        id: String
    },

}
</script>