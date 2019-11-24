<template>
  <div class="login-wrapper">
    <div class="user">
      <div class="account">
        <span>账号</span>
        <input type="text" v-model="account" placeholder="请输入邮箱或手机号" />
      </div>
      <div class="password">
        <span>密码</span>
        <input type="password" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="btn">
        <button @click="login">登录</button>
        <span @click="toRegister">>>>转到注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { saveToken } from '../../utils/localStorage'
export default {
  name: 'Login',
  data() {
    return {
      account: '123@test.com',
      password: '123'
    }
  },
  methods: {
    login() {
      this.$http
        .post('/user/login', {
          account: this.account,
          password: this.password,
        })
        .then(res => {
          saveToken(res.data.token)
          this.$router.push('/blog/list')
        })
    },
    toRegister() {
      this.$router.push('/user/register')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/global.scss';
.login-wrapper {
  width: 100%;
  height: 100%;
  @include center;
  background-color: #ccc;
  .user {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    .account,
    .password {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      span {
        margin-right: 10px;
        font-size: 14px;
      }
      input {
        outline: none;
        border: none;
        height: 50px;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        &:focus {
          border-bottom: 1px solid #000;
        }
      }
    }
    .btn {
      font-size: 14px;
      text-align: right;
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
