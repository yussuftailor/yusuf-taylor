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
        { mediaSocial: "Instagram", mediaId:"yussuftailor", mediaLogo: require("../assets/img/social/logo-instagram.png"), socialLink: "https://www.instagram.com/yussuftailor/?igshid=MzRlODBiNWFlZA%3D%3D" },
        { mediaSocial: "Facebook", mediaId:"yussuftailor67", mediaLogo: require("../assets/img/social/logo-fb.png"), socialLink: "https://www.facebook.com/yussuftailor67?paipv=0&eav=AfZgkpGuZmZGWNQIv-0OCJ0e3JHtpkDfaDjJJUhqXJfRMqrFMmWMK07KsKmXj3ZdfK0&_rdr" },
        { mediaSocial: "Email", mediaId:"yussuftailor@outlook.com", mediaLogo: require("../assets/img/social/logo-email.png"), socialLink: "mailto:yussuftailor@outlook.com" },
      ]
    }
  }
}
</script>

<style></style>