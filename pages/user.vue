<template>
  <div class="login">
    <div class="login__box">
      <img class="logo" :src="resolve(logo_src)" alt="logo">
      <div class="error" v-show="!error.OK">
        {{ error.msg }}
      </div>
      <form class="form">
        <p>username</p>
        <input v-model="username" type="text" name="username">
        <p>password</p>
        <input v-model="password" type="password" name="password">
      </form>
      <div class="btns">
        <span class="btn" @click="Login(username, password)">
          login
        </span>
        <span class="btn" @click="Register(username, password)">
          register
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user.js'
export default {
  name: 'User',
  data() {
    return {
      logo_src: 'images/logo-wide.png',
      username: undefined,
      password: undefined,
      error: { OK: 1 }
    }
  },
  methods: {
    async Login(username, password) {
      const result = await login(username, password)
      if (!result.data.OK) {
        this.error = result.data
      }
    },
    Register: register
  }
}
</script>
