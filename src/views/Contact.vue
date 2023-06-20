<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ContactSocialMedia :socialData="socialData" />
  <ContactOurAddress/>
  <ContactContactUs/>
</template>

<script>
import ContactSocialMedia from '../components/sections/ContactSocialMedia.vue'
import ContactContactUs from '../components/sections/ContactContactUs.vue'
// import OurAddress from '../components/OurAddress.vue'
import ContactOurAddress from '@/components/sections/ContactOurAddress.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  components: {
    ContactSocialMedia,
    ContactContactUs,
    ContactOurAddress,
  },
  data() {
    return {
      socialData: [
        { mediaSocial: "Instagram", mediaId:"yusuftaylor", mediaLogo: require("../assets/img/social/logo-instagram.png") },
        { mediaSocial: "Email", mediaId:"yusuftaylor", mediaLogo: require("../assets/img/social/logo-tiktok.png") },
        { mediaSocial: "Tokopedia", mediaId:"yusuftaylor", mediaLogo: require("../assets/img/social/logo-in.png") },
      ]
    }
  }
}
</script>

<style></style>