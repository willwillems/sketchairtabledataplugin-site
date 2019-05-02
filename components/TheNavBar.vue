<template lang="pug">
  nav.nav-bar
    .content-container.nav-bar__content
      a.nav-bar__logo( href="#home" )
        img( src="/img/logo.png" style="object-fit: cover;" )
      .nav-bar__links
        a( href="#info-section" ).link Info
        a( href="#specs-section" ).link Features
        a( href="#faq-section" ).link FAQ
        // AppButton( @click="goToProductPage" style="color: #ffb142;" pop ) Buy $16,99
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  components: {
    AppButton
  },
  methods: {
    goToProductPage () {
      document.location.href = 'https://gum.co/FNdp'
    }
  }
}
</script>


<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  background-color: white;

  &__content {
    width: 960px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    height: 40px;
    width: 40px;

    img {
      height: 40px;
      width: 40px;
    }
  }

  &__links {
    & > * {
      margin: 0 8px;
    }
    & > *:last-child {
      margin-right: 0;
    }
  }
}

.link {
  font-weight: bold;
  text-decoration: none;
  color: #999;

  &--active, &:hover {
    color: rgb(0, 128, 255);
  }
}
</style>
