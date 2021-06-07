<template>
  <div class="alert">
    <div class="icon-container"></div>
    <div class="message">Kontak Tidak ditemui</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.alert {
  position: relative;
  display: flex;
  width: 17rem;
  height: 2rem;
  border-radius: 0.25rem;
  background: $background-color;
  color: $primary-color;
  box-sizing: border-box;
  border: 2px solid rgba($error-color, 0.5);
  overflow: hidden;
  margin-bottom: 0.5rem;
  .message {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $error-color;
    padding-left: 1rem;
    font-size: 0.65rem;
  }
}
</style>
