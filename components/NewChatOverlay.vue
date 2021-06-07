<template>
  <div class="popup">
    <div class="main-card">
      <div class="error-container"></div>
      <div class="header">
        <div class="name-container">
          <h1 class="name">New Chat</h1>
          <p class="message subtext-dark">Silahkan masukkan username</p>
        </div>
<<<<<<< HEAD
        <div class="button-close" @click="keluar">
          <v-icon v-ripple class="icon">mdi-close</v-icon>
=======
        <div v-ripple class="button-close" @click="keluar">
          <v-icon class="icon">mdi-close </v-icon>
>>>>>>> 95066b1193078655a8f4d6c2cb6c62c40ff12e33
        </div>
      </div>
      <!-- body menggunakan componen TextInput.vue -->
      <div class="body">
        <text-input :input="username" style="margin-bottom: 1rem" />
        <div v-ripple class="button">Enter</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: {
        label: 'username',
        type: 'text',
        icon: 'mdi-account-circle',
        placeholder: 'place username here',
        model: '',
      },
    }
  },

  methods: {
    keluar() {
      this.$emit('tutup-popup')
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(#000, 0.5);
  .main-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #1e1626;
    width: 15rem;
    border-radius: 1rem;
    .header {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name-container {
        font-family: 'quicksand';
        padding: 1rem;
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .button-close {
<<<<<<< HEAD
=======
        border-radius: 0.25rem;
        cursor: pointer;
>>>>>>> 95066b1193078655a8f4d6c2cb6c62c40ff12e33
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
<<<<<<< HEAD
=======
        padding: 1rem;
>>>>>>> 95066b1193078655a8f4d6c2cb6c62c40ff12e33
        width: 1rem;
        .icon {
<<<<<<< HEAD
          cursor: pointer;
=======
>>>>>>> 95066b1193078655a8f4d6c2cb6c62c40ff12e33
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $subtext-color;
<<<<<<< HEAD
          width: 1rem;
          height: 1rem;
=======
>>>>>>> 95066b1193078655a8f4d6c2cb6c62c40ff12e33
        }
      }
    }
    .body {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 1rem 1rem 1rem;
      .button {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 2rem;
        width: 100%;
        background-color: $primary-color;
        border-radius: 0.25rem;
        font-size: 0.65rem;
        cursor: pointer;
        font-family: 'quicksand';
      }
    }
  }
}
</style>
