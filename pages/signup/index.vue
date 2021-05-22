<template>
  <form class="login-container">
    <div class="main-card">
      <div class="error-container"></div>
      <div class="header">
        <h1 class="name">Welcome to Susmed!</h1>
        <p class="message subtext-dark">Social media yang suspicious</p>
      </div>
      <!-- body menggunakan componen TextInput.vue -->
      <div class="body">
        <text-input :input="namaInput" style="margin-bottom: 0.5rem" />
        <text-input :input="emailInput" style="margin-bottom: 0.5rem" />
        <text-input :input="passInput" style="margin-bottom: 1.5rem" />
        <div v-ripple class="button">Enter</div>
        <div class="sign-up">
          Already sussy?
          <span>Sign in</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      loading: false,
      loadingData: true,
      errorMesage: '',
      namaInput: {
        label: 'Nama',
        type: 'text',
        icon: 'mdi-account',
        placeholder: 'ur sussy name goes here',
        model: '',
      },
      emailInput: {
        label: 'Email',
        type: 'text',
        icon: 'mdi-email',
        placeholder: 'sus@sus.com',
        model: '',
      },
      passInput: {
        label: 'Password',
        type: 'password',
        icon: 'mdi-key',
        placeholder: 'place ur pass here',
        model: '',
        autocomplete: 'current-password',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .main-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #1e1626;
    width: 15rem;
    height: 20rem;
    border-radius: 1rem;
    .header {
      font-family: 'quicksand';
      padding: 1rem 0;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .body {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 1rem 1rem 1rem;
      text-input {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .forgot-password {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        margin: 0.5rem 0;
        span {
          cursor: pointer;
          position: relative;
          justify-content: flex-end;
          display: flex;
          font-size: 0.55rem;
          font-family: 'quicksand';
        }
      }
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
      .sign-up {
        margin-top: 0.5rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.55rem;
        font-family: 'quicksand';
        span {
          margin-left: 0.125rem;
          cursor: pointer;
          font-family: 'quicksand';
        }
      }
    }
  }
}
</style>
