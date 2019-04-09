<template lang="pug">
  .button-container
      button.button( v-bind="$attrs" v-on="listeners" :class="{'button--pop': pop}" )
        span.button__text
          slot
</template>

<script>
export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    pop: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-container {
  color: white;
  max-width: 460px;
  display: inline-block;
}

.button {
  box-sizing: border-box;
  appearance: none;
  color: inherit;
  background-color: currentColor;
  font-family: inherit;
  font-size: inherit;
  border: none;
  border-radius: 5px;
  padding: 0 1.2em;
  margin: 10px 8px;
  height: 2em;
  line-height: 2em;
  vertical-align: middle;
  font-weight: bold;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  &__text {
    color: white;
  }

  &--pop {
    &:hover {
      transform: scale(1.1);
    }
  }

  &:active {
    background-color: #e49a34;
  }
}
</style>
