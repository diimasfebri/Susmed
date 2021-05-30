<template>
  <div class="page-container">
    <!-- "@message-selected" untuk menerima event dari chatList
         "Chatselected" jika ada kiriman, maka akan menjalankan fungsi chatSelected
     -->
    <chat-list
      @message-selected="chatSelected"
      @buka-popup="bukaPopup = true"
    />
    <!-- "v-if" akan terbuka jika messageSelected ada
         ":contact" script untuk mengikat data object yang akan di bawa ke chat-box
         "messageSelected" data yang akan dibawak :contact
    -->
    <chat-box v-if="messageSelected" :contact="messageSelected" />
    <div v-else class="placeholder">Select your partner to begin.</div>
    <new-chat-overlay v-if="bukaPopup" @tutup-popup="bukaPopup = false" />
  </div>
</template>

<script>
import NewChatOverlay from '../../components/NewChatOverlay.vue'
export default {
  components: { NewChatOverlay },
  middleware: 'auth',
  data() {
    return {
      // insialisasi object
      messageSelected: null,
      bukaPopup: false,
    }
  },

  methods: {
    // fungsi untuk menangkap sementara data yg dikirimkan dari chatList
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
