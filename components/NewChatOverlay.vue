<template>
  <div class="popup">
    <div class="newChat">
      <span @click="keluar">test</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    keluar() {
      this.$emit('tutup-popup')
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
  .newChat {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    width: 25%;
    height: 25%;
    background: white;
    overflow: hidden;
    .span {
      color: black;
    }
  }
}
</style>
