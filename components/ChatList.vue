<template>
  <div class="chat-list-page">
    <div class="header">
      <div class="chat-container">
        <h1>Chat</h1>
        <div v-ripple class="circ-btn" @click="bukaPopup = true">
          <v-icon class="icon">mdi-plus</v-icon>
        </div>
      </div>
      <div class="search-bar" placeholder="...">
        <v-icon class="icon">mdi-magnify</v-icon>
        <input type="text" class="input" placeholder="..." />
      </div>
    </div>
    <div class="chat-listed">
      <!-- "v-for" untuk menampilkan semua yang didalam array contactList, dengan idUser sebagai keynya.
           ":class" untuk membedakan chat yang active dengan tidak
           "@click" untuk menjalankan fungsi chatSelected, dimana mengirimkan parameter (contact)
       -->
      <div
        v-for="contact in contactList"
        :key="contact.idUser"
        v-ripple
        :class="messageSelected === contact.idUser ? 'active' : ''"
        class="contact-list"
        @click="chatSelected(contact)"
      >
        <div
          :style="`background-color: ${randomcolor()}`"
          class="profile"
        ></div>
        <div class="name-container">
          <!-- "contact.name" untuk mengambil data nama saja dari object conctactList  -->
          <div class="name">{{ contact.name }}</div>
          <div class="recently">
            <div class="chat-recently">lagi apa?</div>
            <div class="time-recently">12m</div>
          </div>
        </div>
      </div>
    </div>
    <new-chat-overlay v-if="bukaPopup" @tutup-popup="bukaPopup = false" />
  </div>
</template>

<script>
import NewChatOverlay from './NewChatOverlay.vue'
export default {
  components: { NewChatOverlay },
  data() {
    return {
      bukaPopup: false,
      contactList: [
        {
          name: 'Aditya Darmawatno',
          idUser: '1',
        },
        {
          name: 'Kemal ',
          idUser: '2',
        },
        {
          name: 'Alex',
          idUser: '3',
        },
        {
          name: 'Dika',
          idUser: '4',
        },
        {
          name: 'Ryandika',
          idUser: '5',
        },
        {
          name: 'Reza',
          idUser: '6',
        },
        {
          name: 'ihsan',
          idUser: '7',
        },
        {
          name: 'Santika',
          idUser: '8',
        },
        {
          name: 'Amar',
          idUser: '9',
        },
        {
          name: 'Ardi',
          idUser: '10',
        },
      ],
      // kontak chat yang dipilih
      messageSelected: '',
    }
  },

  methods: {
    // fungsi untuk mengambil warna secara random
    randomcolor() {
      const colors = [
        '#DFFF00',
        '#FFBF00',
        '#DE3163',
        '9FE2BF',
        '#40E0D0',
        '#CCCCFF',
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    },

    // fungsi untuk memilih kontak yang dipilih dan langsung mengirimkan event ke file index.
    chatSelected(contact) {
      this.messageSelected = contact.idUser
      // emit itu kirim event
      this.$emit('message-selected', contact)
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-list-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 20rem;
  height: 100%;
  border-right: 1px solid $border-color;
  .header {
    position: relative;
    display: flex;
    width: 100%;
    height: 7rem;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .chat-container {
      position: relative;
      width: 100%;
      margin: 1rem 0;
      padding: 0 1rem;
      //layaknya padding namun menebal ke dalam content
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
    .search-bar {
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
  .chat-listed {
    position: relative;
    display: flex;
    height: calc(100% - 7rem);
    width: 100%;
    // agar bisa scroll
    overflow-y: auto;
    justify-content: flex-start;
    flex-direction: column;
    .contact-list {
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem 0;
      box-sizing: border-box;
      width: 100%;
      height: 4rem;
      flex-shrink: 0;
      &.active {
        background-color: rgba($primary-color, 0.1);
      }
      .profile {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;
        border-radius: 0.5rem;
        width: 2rem;
        height: 2rem;
      }
      .name-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        width: calc(100% - 2rem);
        .nama {
          position: relative;
          display: flex;
          font-weight: bolder;
          width: 100%;
        }
        .recently {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 100%;
          .chat-recently {
            font-size: 0.6rem;
            color: $subtext-color;
          }
          .time-recently {
            font-size: 0.6rem;
            padding-right: 1rem;
            color: $subtext-color;
          }
        }
      }
    }
  }
}
</style>
