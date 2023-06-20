<template>
  <AboutHero/>
  <AboutAboutUs/>
  <AboutHowWeWork/>
  <AboutFAQ/>
</template>

<script>
import AboutHero from '@/components/sections/AboutHero.vue';
import AboutAboutUs from '@/components/sections/AboutAboutUs.vue';
import AboutHowWeWork from '@/components/sections/AboutHowWeWork.vue';
import AboutFAQ from '@/components/sections/AboutFAQ.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About',
    components: {
    AboutHero,
    AboutAboutUs,
    AboutHowWeWork,
    AboutFAQ
}
}
</script>

<style>

</style>