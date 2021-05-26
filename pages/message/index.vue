<template>
  <div class="page-container">
    <chat-list @message-selected="chatSelected" />
    <chat-box v-if="messageSelected" :contact="messageSelected" />
    <div v-else class="placeholder">Select your partner to begin.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageSelected: null,
    }
  },

  methods: {
    chatSelected(contact) {
      this.messageSelected = contact
    },
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;
  .placeholder {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: calc(100% - 20rem);
    color: $subtext-color;
  }
}
</style>
