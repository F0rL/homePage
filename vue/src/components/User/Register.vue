<template>
  <div class="register-wrapper">
    <div class="user">
      <div class="account">
        <span>昵称</span>
        <input type="text" placeholder="请输入昵称" v-model="nickname" />
      </div>
      <div class="account">
        <span>账号</span>
        <input type="text" placeholder="请输入邮箱或手机号" v-model="account" />
      </div>
      <div class="password">
        <span>密码</span>
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="password" :class="{'wrong': !(password === rePassword)}">
        <span>确认密码</span>
        <input type="password" placeholder="请重复输入密码" v-model="rePassword" />
      </div>
      <x-captcha ref="captcha"></x-captcha>
      <div class="btn">
        <button @click="register">注册</button>
        <span @click="toLogin">>>>转到登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import xCaptcha from '../common/xCaptcha'
import { saveToken } from '../../utils/localStorage'
export default {
  name: 'Register',
  data() {
    return {
      account: '',
      password: '',
      rePassword: '',
      nickname: ''
    }
  },
  computed: {
    passwordNotSame() {
      return this.password === this.rePassword
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/user/login')
    },
    register() {
      this.$refs.captcha
        .verify()
        .then(() => {
          this.$http
            .post('/user/register', {
              email: this.account,
              password: this.password,
              nickname: this.nickname
            })
            .then(res => {
              if (res.data.code === 404) {
                alert(res.data.msg)
                return
              }
              saveToken(res.data.token)
              this.$router.push('/blog/list')
            })
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    xCaptcha
  }
}
</script>

<style scoped lang="scss">
.register-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .user {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #ddd;
    .account,
    .password {
      width: 340px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      &.wrong {
        &::before {
          position: absolute;
          display: inline;
          content: '*';
          left: -15px;
          top: 21px;
          color: red;
        }
      }
      span {
        width: 60px;
        margin-right: 10px;
        font-size: 14px;
      }
      input {
        flex: 1;
        outline: none;
        border: none;
        height: 30px;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        &:focus {
          border-bottom: 1px solid #000;
        }
      }
    }
    .btn {
      margin-top: 20px;
      font-size: 14px;
      text-align: left;
      button {
        border: none;
        font-size: 14px;
        padding: 5px 20px;
        border-color: #088ef0;
        color: #fff;
        background: linear-gradient(#34a5f8, #088ef0);
        cursor: pointer;
        box-shadow: 0 4px 0 #0880d7, 0 8px 3px rgba(0, 0, 0, 0.3);
        &:active {
          background-color: #827ae1;
          border-color: #827ae1;
          color: #000;
          position: relative;
          top: 2px;
        }
      }
      span {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
