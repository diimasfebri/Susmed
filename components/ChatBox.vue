<template>
  <div class="tubuh">
    <div class="header">
      <div class="profile"></div>
      <div class="name-profile">{{ contact.name }}</div>
    </div>
    <div class="chat-container">
      <div class="msg-container">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="msg.type"
          class="msg"
        >
          <div class="text-container">
            <p class="text">{{ msg.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="text-bar">
        <input
          v-model="messageModel"
          type="text"
          class="input"
          placeholder="write a message ..."
        />
      </div>
      <div v-ripple class="send-icon">
        <v-icon v-ripple class="icon">mdi-send</v-icon>
      </div>
    </div>
    <div class="column-chat"></div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      messages: [
        {
          type: 'sent',
          value: 'hai',
        },
        {
          type: 'received',
          value: 'hai juga',
        },
      ],

      messageModel: '',
    }
  },

  mounted() {
    const socket = io('http://localhost:8000/messages')
    socket.emit('join-room', 1)
  },

  methods: {
    sendMessage() {
      // push ke array messsgge
    },
  },
}
</script>

<style lang="scss" scoped>
.tubuh {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 20rem);
  height: 100%;
  border-right: 1px solid $border-color;
  .header {
    position: relative;
    width: 100%;
    height: 3rem;
    margin: 1rem 0;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    .profile {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $subtext-color;
      margin: 0 1rem;
      border-radius: 0.5rem;
      width: 2rem;
      height: 2rem;
    }
    .name-profile {
      position: relative;
      display: flex;

      color: $font-color;
      font-weight: bolder;
    }
  }
  .chat-container {
    position: relative;
    width: 100%;
    height: calc(100% - 4rem);
    // margin: 1rem 0;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    .msg-container {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      padding: 0.5rem;
      // undo into this
      .msg {
        position: relative;
        width: 100%;
        margin-bottom: 0.125rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        .text-container {
          position: relative;
          max-width: 60%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          p.text {
            position: relative;
            display: flex;
            word-break: break-all;
            padding: 0.25rem 0.35rem !important;
            font-size: 0.6rem;
            font-weight: 500;
            border-radius: 0.35rem;
          }
        }
        &.sent {
          flex-direction: row-reverse;
          .text-container {
            align-items: flex-end;
            .text {
              background: $primary-color;
              color: #fff;
            }
          }
        }
        &.received {
          .text-container {
            align-items: flex-start;
            .text {
              background: $subtext-color;
              color: $font-color;
            }
          }
        }
      }
    }
  }
  .bottom-bar {
    position: relative;
    display: flex;
    height: 2rem;
    width: 100%;
    align-items: center;
    border-radius: 0.5rem;
    .text-bar {
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
    .send-icon {
      cursor: pointer;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      margin: 0 1rem 1rem 1rem;
      .icon {
        position: relative;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        pointer-events: none;
        color: $primary-color;
      }
    }
  }
}
</style>
