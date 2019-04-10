<template lang="pug">
  main
    section.section.section-404
      .content-container( style="text-align: center;" )
          h1.title( style="font-size: 8rem;" ) 404
          h2.sub-title  Page not found, get back <a href="/">home</a>.
</template>

<style lang="scss" scoped>
.section-404 {
  height: 70vh;
}

.title {
  font-weight: 800;
  font-size: 3.5rem;
  line-height: 1em;
  padding: 0.1em 0;
}

.sub-title {
  margin: 12px 0;
  letter-spacing: -1px;
  color: rgb(87, 87, 87);
}
</style>
