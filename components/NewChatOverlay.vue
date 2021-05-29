<template>
  <div class="popup">
    <div class="login">
      <div class="input-container">
        <div class="username">
          <span>Username </span>
          <input
            v-model="username"
            placeholder="..."
            class="input"
            :class="pernahSubmit && !username ? 'error' : ''"
          />
        </div>
        <div class="password">
          <span>Password </span>
          <input
            v-model="password"
            placeholder="..."
            type="password"
            class="input"
            :class="pernahSubmit && !password ? 'error' : ''"
          />
        </div>
        <div class="signup">
          Don't have any account?
          <p v-ripple @click="bukaSignUp">Sign Up</p>
        </div>
      </div>
      <div class="button-container">
        <div class="kiri">
          <div v-ripple class="button" @click="keluar">
            <span>Cancel</span>
          </div>
        </div>
        <div class="kanan">
          <div
            v-ripple
            class="button primary"
            :style="
              username && password ? '' : 'opacity: 0.5; pointer-events: none'
            "
            @click="signin"
          >
            <span>Sign In</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      pernahSubmit: false,
    }
  },
  computed: {
    cek() {
      if (!this.username || !this.password) return true
      return false
    },
  },

  mounted() {
    // fungsi sebagai paramater,
    this.$root.$on('clear-input', () => {
      this.username = ''
      this.password = ''
    })
  },

  methods: {
    keluar() {
      this.$emit('tutup-popup')
    },
    bukaSignUp() {
      this.$emit('buka-sign-up')
      this.$emit('tutup-popup')
    },
    signin() {
      this.pernahSubmit = true
      const user = {
        username: this.username,
        password: this.password,
      }
      this.$emit('user-signin', user) // "user-signin" disini sebagai event,
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
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(#000, 0.5);
  .login {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    width: 25%;
    background: white;
    overflow: hidden;
  }
  .input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    flex-direction: column;
    > div {
      position: relative;
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      span {
        position: relative;
        width: 100%;
        height: 1rem;
        line-height: 1;
        font-size: 0.65rem;
        color: #777;
        display: flex;
        font-weight: bolder;
        justify-content: flex-start;
        align-items: center;
      }
      &.signup {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        line-height: 1;
        font-size: 0.65rem;
        color: #777;
        p {
          cursor: pointer;
          margin-left: 0.25rem;
          color: rgba(219, 82, 77, 1);
        }
      }
      input {
        position: relative;
        height: 2rem;
        width: 100%;
        padding: 0.25rem;
        font-size: 0.65rem;
        font-weight: 600;
        color: rgba(#000, 0.5);
        border: solid 2px #777;
        &.error {
          border-color: red;
        }
        // &:not(:placeholder-shown) {
        //   + .icon-container > .border {
        //     transform: translateX(5px);
        //   }
        // }
        // &:focus {
        //   outline: none;
        //   + .icon-container > .border {
        //     transform: translateX(5px);
        //     border-color: #6bc785;
        //   }
        // }
      }
    }
  }
  .button-container {
    position: relative;
    display: flex;
    width: 100%;
    height: 2rem;
    background: #ddd;
    padding: 0 0.5rem;
    align-items: center;
    justify-content: space-between;

    .kiri {
      position: relative;
      display: flex;
      align-items: center;
    }
    .kanan {
      position: relative;
      display: flex;
      align-items: center;
    }
    .button {
      position: relative;
      display: flex;
      justify-content: center;
      border-radius: 0.25rem;
      align-items: center;
      cursor: pointer;
      height: 1.5rem;
      padding: 0 1rem;
      margin-right: 0.25rem;
      span {
        font-size: 0.6rem;
        font-weight: bold;
        color: #777;
      }
      &.primary {
        margin: 0;
        background: #777;
        span {
          color: white;
        }
      }
    }
  }
}
</style>
