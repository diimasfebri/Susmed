<template>
  <div class="body">
    <div class="left-section">
      <div class="header">
        <h1>Chat</h1>
        <div class="search-bar" placeholder="...">
          <v-icon class="icon">mdi-magnify</v-icon>
        </div>
      </div>
      <div class="coloumn-chat"></div>
    </div>
    <div class="center-section"></div>
    <div class="right-section"></div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .left-section {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(100% -10rem);
    height: 100%;
    border-right: 1px solid $border-color;
    h1 {
      position: relative;
      display: flex;
      margin: 0.5rem;
    }
    .search-bar {
      position: relative;
      display: flex;
      margin: 0.5rem;
      background-color: $subtext-color;
      border-radius: 0.5rem;
      .icon {
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: $subtext-color;
      }
    }
  }
}
</style>
