<template>
  <div class="alerts-container">
    <alerts @tutup-alert="keluarPopup" />
  </div>
</template>

<script>
import Alerts from './Alerts.vue'
export default {
  components: { Alerts },

  methods: {
    keluarPopup() {
      this.$emit('keluar-popup')
    },
  },
}
</script>

<style lang="scss" scoped>
.alerts-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 10000;
  right: 0;
  top: 5rem;
  padding-right: 1rem;
}
</style>
