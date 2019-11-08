<template>
  <div :class="{'input-focus': inputFocus}" class="home-input-wrapper">
    <input
      type="text"
      class="home-input"
      ref="xInput"
      :value="value"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @change="onChange"
      @keyup.enter="onEnter"
    />
    <label v-if="placeholder" :class="{'label-focus':inputFocus || value}">{{placeholder}}</label>
    <div class="icon-wrapper" @click="search">
      <x-icon name="baidu" />
    </div>
  </div>
</template>

<script>
import { homeMixin } from '@/store/mixin'
import xIcon from '../common/xIcon'

export default {
  name: 'HomeInput',
  mixins: [homeMixin],
  props: {
    placeholder: String,
    value: String,
    disabled: { type: Boolean, default: false }
  },
  methods: {
    search() {
      this.$emit('inputSearch')
    },
    onFocus(e) {
      this.$emit('focus', e)
      this.setInputFocus(true)
      if (this.disabled) {
        this.$refs.xInput.blur()
      }
    },
    onBlur(e) {
      if (this.disabled) {
        return
      }
      this.$emit('blur', e)
      this.setInputFocus(false)
    },
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onChange(e) {
      this.$emit('change', e)
    },
    onEnter(e) {
      this.$emit('enter', e)
    }
  },
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.home-input-wrapper {
  width: 300px;
  height: 50px;
  font-size: 20px;
  padding: 0 20px 0 25px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.25);
  transition: width 0.3s;
  backdrop-filter: blur(10px);
  &:hover {
    width: 500px;
  }
  &.input-focus {
    width: 500px;
    background-color: #fff;
  }
  .home-input {
    flex: 1;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
    outline: none;
  }
  label {
    display: block;
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.45);
    pointer-events: none;
    &.label-focus {
      display: none;
    }
  }
  .icon-wrapper {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    @include center;
    cursor: pointer;
    z-index: 10;
  }
}
</style>
