<template>
  <div
    ref="input"
    class="input-field"
    :style="`height: ${!input.rules ? '3rem' : '4rem'}`"
  >
    <p v-if="input.light" class="label">{{ input.label }}</p>
    <h4 v-else class="label subtext">{{ input.label }}</h4>
    <div class="input-container">
      <input
        v-model="model"
        :type="input.type"
        class="input"
        :class="input.readonly ? 'invincible' : ''"
        :placeholder="input.placeholder"
        :readonly="input.readonly || input.disabled"
        :tabindex="input.readonly || input.disabled ? '-1' : '0'"
        :autocomplete="input.autocomplete || ''"
        :style="
          input.icon ? '' : 'width: calc(100% - 3px); padding-left: 0.5rem;'
        "
        @blur="validate"
      />
      <div class="icon-container" :style="input.icon ? '' : 'width: 3px'">
        <v-icon v-if="input.icon" class="icon">{{ input.icon }}</v-icon>
        <div class="border"></div>
      </div>
      <div v-if="input.append" class="append subtext">
        <h4>{{ input.append }}</h4>
      </div>
    </div>
    <div v-if="input.rules" class="error-container">
      <p class="message">{{ message }}</p>
    </div>
    <div v-if="input.disabled" class="overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      message: '',
      model: '',
    }
  },
  methods: {
    disable(bool) {
      if (typeof bool === 'boolean') {
        this.model = ''
      }
    },
    validate(e) {
      const value = this.model
      const { rules } = this.input
      const { input } = this.$refs
      if (!rules || rules.length === 0) return
      const rL = rules.length
      let message = ''
      for (let i = 0; i < rL; i++) {
        message = rules[i](value)
        if (message) {
          i = rL
          this.message = message
          input.classList.add('err')
          return true
        }
        if (i === rL - 1) {
          input.classList.remove('err')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.input-field {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h4.label,
  p.label {
    position: relative;
    width: 100%;
    height: 1rem;
    line-height: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Quicksand';
  }
  .input-container {
    z-index: 2;
    position: relative;
    width: 100%;
    height: 2rem;
    border-radius: 0.25rem;
    overflow: hidden;
    background: $background-color;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    .icon-container {
      position: relative;
      width: 2rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        position: relative;
        font-size: 1rem;
        color: $subtext-color;
      }
      .border {
        position: absolute;
        top: 0;
        left: -5px;
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
        box-sizing: border-box;
        border-left: 3px solid rgba(0, 0, 0, 0.25);
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
          border-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
    }
    input.input {
      position: relative;
      width: calc(100% - 2rem);
      height: 100%;
      padding-right: 0.25rem;
      font-family: 'Quicksand';
      font-size: 0.6rem;
      font-weight: 600;
      color: $font-color;
      &.invincible {
        pointer-events: none;
      }
      &:not(:placeholder-shown) {
        + .icon-container > .border {
          transform: translateX(5px);
        }
      }
      &:focus {
        outline: none;
        + .icon-container > .border {
          transform: translateX(5px);
          border-color: $primary-color;
        }
      }
    }
    .append {
      position: absolute;
      top: 0;
      right: 0;
      width: 2rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h4 {
        position: relative;
        font-family: 'Quicksand';
      }
    }
  }
  .error-container {
    z-index: 1;
    pointer-events: none;
    position: relative;
    width: 100%;
    height: 1rem;
    transition: transform 0.3s cubic-bezier(0.75, 0, 0.75, 0.2);
    transform: translateY(-100%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    p.message {
      line-height: 1;
      transform: translateY(-0.0625rem);
      font-family: 'Quicksand';
      color: $error-color;
    }
  }
  &.err {
    .border {
      transform: translateX(5px);
      border-color: $error-color !important;
    }
    .error-container {
      transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      transform: translateY(0);
    }
  }
  .overlay {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
