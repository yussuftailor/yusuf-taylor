<template>
  <Hero class=""/>
  <HomeGetStarted/>
  <WhyUs/>
  <WhyCustome/>
  <HomeGoToShowroom/>
</template>

<script>
import WhyCustome from '@/components/WhyCustome.vue';
import WhyUs from '@/components/WhyUs.vue';
import Hero from '@/components/Hero.vue';
import HomeGetStarted from '@/components/sections/HomeGetStarted.vue';
import HomeGoToShowroom from '@/components/sections/HomeGoToShowroom.vue';

export default {
  name: 'HeloWorld',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    WhyUs,
    HomeGetStarted,
    WhyCustome,
    Hero,
    HomeGoToShowroom,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
