<template>
  <div class="layout">
    <div class="nav">
      <div class="top-section">
        <div class="profile">
          <div class="profile-pic"></div>
        </div>
      </div>
      <div class="center-section">
        <div v-ripple class="button">
          <v-icon class="icon">mdi-home-variant-outline</v-icon>
        </div>
        <div v-ripple class="button">
          <v-icon class="icon">mdi-message-outline</v-icon>
        </div>
        <div v-ripple class="button">
          <v-icon class="icon">mdi-account-box-outline</v-icon>
        </div>
      </div>
      <div class="bottom-section">
        <div v-ripple class="logout">
          <v-icon class="icon">mdi-power</v-icon>
        </div>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  .nav {
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
  .body {
    position: relative;
    display: flex;
    width: calc(100% - 5rem);
    height: 100%;
    // ksih box sizing agar tidak overflow
    box-sizing: border-box;
    border-left: 1px solid $border-color;
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
}
</style>
