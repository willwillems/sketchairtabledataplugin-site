<template lang="pug">
  nav.nav-bar
    .content-container.nav-bar__content
      .nav__logo
        img
      .nav__links
        a( href="" ) Features
        a( href="" ) F.A.Q.
        a( href="" )
        button( click="" ) Buy
</template>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;

  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
