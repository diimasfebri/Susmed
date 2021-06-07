<template>
  <div class="alerts-container">
    <alerts />
  </div>
</template>

<script>
import Alerts from './Alerts.vue'
export default {
  components: { Alerts },


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
