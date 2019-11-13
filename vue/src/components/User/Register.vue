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
      <div class="btn">
        <button @click="register">注册</button>
        <span @click="toLogin">>>>转到登录</span>
      </div>
    </div>
  </div>
</template>

<script>
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
      return password === rePassword
    }
  },
  methods: {
    toLogin() {
      this.$router.push('/user/login')
    },
    register() {
      this.$http
        .post('/user/register', {
          email: this.account,
          password: this.password,
          nickname: this.nickname
        })
        .then(res => {
          this.$router.push('/blog/list')
        })
    }
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
  background-color: #ccc;
  .user {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    .account,
    .password {
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
        margin-right: 10px;
        font-size: 14px;
      }
      input {
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
