<template>
  <div class="alert">
    <div class="container">
      <div class="message">Kontak Tidak ditemui</div>
      <div class="button-close" @click="keluar()">
        <v-icon class="icon">mdi-close</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    keluar() {
      this.$emit('tutup-alert')
    },
  },
}
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
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .message {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $error-color;
      padding-left: 1rem;
      font-size: 0.65rem;
    }
    .button-close {
      cursor: pointer;
      position: relative;
      display: flex;
      .icon {
        color: $subtext-color;
      }
    }
  }
}
</style>
