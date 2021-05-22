<template>
  <v-app class="main-layout">
    <nuxt />
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-layout {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'quicksand';
  font-size: 24px;
  color: $font-color;
  background: $background-color;
  @media screen and (max-width: 1919px) {
    font-size: 22px;
  }
  @media screen and (max-width: 1599px) {
    font-size: 21px;
  }
  @media screen and (max-width: 1479px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1379px) {
    font-size: 19px;
  }
}
h1 {
  font-size: 0.9rem;
}
h2 {
  font-size: 0.75rem;
}
h3 {
  font-size: 0.65rem;
}
h4 {
  font-size: 0.6rem;
}
h5 {
  font-size: 0.55rem;
}
p {
  font-size: 0.55rem;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
