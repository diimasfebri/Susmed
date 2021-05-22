<template>
  <div class="layout">
    <div class="nav">
      <div class="top-section">
        <div class="profile">
          <div class="profile-pic"></div>
        </div>
      </div>
      <div class="center-section">
        <!-- looping object navlist, akan memunculkan icon-icon.
         navSelected untuk membedakan aktif atau ga-->
        <div
          v-for="nav in navList"
          :key="nav.path"
          v-ripple
          :class="navSelected === nav.path ? 'active' : ''"
          class="button"
          @click="navSelected = nav.path"
        >
          <v-icon class="icon">{{ nav.icon }}</v-icon>
        </div>
      </div>
      <div class="bottom-section">
        <div v-ripple class="logout">
          <v-icon class="icon">mdi-power</v-icon>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="header">
        <div class="nav-container">
          <!-- pageTitle merupakan properties -->
          <v-icon class="icon">{{ pageTitle.icon }}</v-icon>
          <div class="nama">{{ pageTitle.name }}</div>
        </div>
        <div v-ripple class="notification">
          <v-icon class="icon">mdi-bell-outline</v-icon>
        </div>
      </div>
      <nuxt class="main" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // array navList isinya nicon dan nama
      navList: [
        {
          name: 'Home',
          icon: 'mdi-home-variant-outline',
          path: '/',
        },
        {
          name: 'Message',
          icon: 'mdi-message-outline',
          path: '/message',
        },
        {
          name: 'Contact',
          icon: 'mdi-account-box-outline',
          path: '/contact',
        },
      ],
      // navSelected
      navSelected: '/',
    }
  },

  // fungsi yang dapat berubah terus
  computed: {
    pageTitle() {
      //  mencari yang navSelected atau yang Aktif
      return this.navList.find((a) => a.path === this.navSelected)
    },
  },
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  > .nav {
    position: relative;
    display: flex;
    justify-content: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 5rem;
    height: 100%;
    background-color: $background-color;
    .top-section {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 5rem;
      .profile {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        background-color: $subtext-color;
        border-radius: 50%;
        .profile-pic {
          position: relative;
          display: flex;
        }
      }
    }
    .center-section {
      position: relative;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .button {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem 0;
        border-radius: 0.5rem;
        width: 3rem;
        height: 3rem;
        .icon {
          position: relative;
          font-size: 1rem;
          color: $subtext-color;
        }
        &.active {
          background-color: rgba($primary-color, 0.2);
          .icon {
            color: $primary-color;
          }
        }
      }
    }
    .bottom-section {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 5rem;
      width: 100%;
      .logout {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        width: 3rem;
        height: 3rem;
        .icon {
          position: relative;
          font-size: 1rem;
          color: $error-color;
        }
      }
    }
  }
  > .body {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100% - 5rem);
    height: 100%;
    // ksih box sizing agar tidak overflow
    box-sizing: border-box;
    border-left: 1px solid $border-color;
    .header {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 5rem;
      border-bottom: 1px solid $border-color;
      .nav-container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0 1rem;
        box-sizing: border-box;
        .icon {
          position: relative;
          color: $primary-color;
          font-size: 1rem;
          padding: 0 1rem;
        }
        .nama {
          color: $font-color;
        }
      }
      .notification {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        width: 3rem;
        height: 3rem;
        margin: 0 2rem;
        .icon {
          position: relative;
          font-size: 1rem;
          color: $subtext-color;
        }
      }
    }
    .main {
      display: flex;
      position: relative;
      width: calc(100vw - 5rem);
      height: calc(100vh - 5rem);
    }
  }
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
