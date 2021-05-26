<template>
  <div class="tubuh">
    <div class="header">
      <h1>Chat</h1>
    </div>
    <div class="chat-container"></div>
    <div class="bottom-bar">
      <div class="text-bar">
        <input type="text" class="input" placeholder="write a message ..." />
      </div>
      <v-icon v-ripple class="icon">mdi-send</v-icon>
    </div>
    <div class="column-chat"></div>
  </div>
</template>

<style lang="scss" scoped>
.tubuh {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 40rem);
  height: 100%;
  border-right: 1px solid $border-color;
  .header {
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
  }
  .chat-container {
    position: relative;
    width: 100%;
    height: calc(100% - 4rem);
    margin: 1rem 0;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  .bottom-bar {
    cursor: pointer;
    position: relative;
    display: flex;
    height: 2rem;
    width: 100%;
    align-items: center;
    border-radius: 0.5rem;
    .text-bar {
      cursor: pointer;
      position: relative;
      display: flex;
      width: calc(100% - 2rem);
      height: 2rem;
      align-items: center;
      margin: 0 0 1rem 1rem;
      background-color: $background-color;
      border: 2px solid $background-light-color;
      border-radius: 0.5rem;
      .text {
        display: flex;
        position: relative;
        width: 2rem;
        justify-content: center;
        align-items: center;
        color: $subtext-color;
        font-size: 0.85rem;
      }
      input {
        margin-left: 0.5rem;
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
    .icon {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      margin: 0 1rem 1rem 1rem;
      color: $primary-color;
    }
  }
}
</style>
