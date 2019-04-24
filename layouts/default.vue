<template>
  <div>
    <TheNavBar />
    <div class="app-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'

export default {
  components: {
    TheNavBar
  }
}
</script>


<style>
html {
  color: rgb(49, 49, 49);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app-wrapper {
  padding-top: 60px;
}

.content-container {
  max-width: 960px;
  min-width: 360px;
  padding: 20px;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
}

.footer {
  text-align: center;
  padding: 20px 0;
  color: white;
}

.link {
  color: inherit;
  margin: 0 10px;
}
</style>
