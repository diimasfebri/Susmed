<template>
  <div class="body">
    <div class="left-section">
      <div class="header">
        <div class="chat-container">
          <h1>Chat</h1>
          <div v-ripple class="circ-btn">
            <v-icon class="icon">mdi-plus</v-icon>
          </div>
        </div>
        <div class="search-bar" placeholder="...">
          <v-icon class="icon">mdi-magnify</v-icon>
          <input type="text" class="input" placeholder="..." />
        </div>
      </div>
      <div class="column-chat"></div>
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
    width: 20rem;
    height: 100%;
    border-right: 1px solid $border-color;
    .header {
      position: relative;
      display: flex;
      width: 100%;
      height: 10rem;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      .chat-container {
        position: relative;
        width: 100%;
        margin: 1rem 0;
        padding: 0 1rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        h1 {
          position: relative;
          display: flex;
          align-items: flex-start;
        }
        .circ-btn {
          cursor: pointer;
          position: relative;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $primary-color;
          .icon {
            display: flex;
            position: relative;
            color: inherit;
          }
        }
      }
    }
    .search-bar {
      cursor: pointer;
      position: relative;
      display: flex;
      width: calc(100% - 2rem);
      height: 2rem;
      align-items: center;
      margin: 0 1rem 1rem 1rem;
      background-color: $background-light-color;
      border-radius: 1rem;
      .icon {
        display: flex;
        position: relative;
        width: 2rem;
        justify-content: center;
        align-items: center;
        color: $subtext-color;
        font-size: 0.85rem;
      }
      .input {
        position: relative;
        box-sizing: border-box;
        padding: 0 0.2rem;
        width: calc(100% - 1.5rem);
        outline: none;
        color: $font-color;
        font-size: 0.6rem;
        font-weight: 600;
      }
    }
  }
}
</style>
