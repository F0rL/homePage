<template>
  <div class="x-captcha">
    <input v-model.trim="text" @focus="$emit('focus',$event)" />
    <img
      v-if="captcha"
      :src="captcha.url"
      style="width:80px;height:32px;margin:0 4px;"
      @click="changeOne"
    />
    <span class="info" v-if="captcha&&!message" @click="changeOne">
      <span class="change">换一张</span>
    </span>
    <span class="error" v-if="message">{{message}}</span>
  </div>
</template>

<script>
import { AV } from '../../utils/config'

export default {
  name: 'xCaptcha',
  props: { autoGet: { type: Boolean, default: true } },
  data() {
    return { text: '', captcha: null, message: '', timerId: null }
  },
  mounted() {
    this.autoGet && this.getCaptcha()
  },
  beforeDestroy() {
    if (this.timerId) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
  },
  methods: {
    getCaptcha() {
      this.message = ''
      this.text = ''
      AV.Captcha.request({ width: 80, height: 32 }).then(captcha => {
        this.captcha = captcha
      })
    },
    changeOne() {
      this.getCaptcha()
    },
    async verify() {
      if (!this.captcha || this.timerId) {
        return Promise.reject()
      }
      if (!this.text) {
        this.handleError({ message: '请输入验证码' })
        return Promise.reject()
      }
      if (this.text.length !== 4) {
        this.handleError({ message: '格式不正确' })
        return Promise.reject()
      }
      await this.captcha
        .verify(this.text)
        .then(res => {
          return Promise.resolve(res)
        })
        .catch(error => {
          this.handleError(error)
          return Promise.reject()
        })
    },
    handleError(error) {
      if (/([\u4e00-\u9fa5]*)/.test(error.message)) {
        this.message = RegExp.$1
        this.timerId = setTimeout(() => {
          this.getCaptcha()
          window.clearTimeout(this.timerId)
          this.timerId = null
        }, 1500)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.x-captcha {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    height: 32px;
    width: 6em;
  }
  > span {
    color: rgba(0, 0, 0, 0.45);
    cursor: default;
    user-select: none;
    > .change {
      color: #1890ff;
      cursor: pointer;
    }
    &.error {
      color: #f10215;
    }
  }
}
</style>
