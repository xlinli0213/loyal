<template>
  <div class="login">
    <div class="login__box">
      <img class="logo" :src="resolve(logo_src)" alt="logo">
      <form class="form">
        <p>username</p>
        <input type="text" name="user">
        <p>password</p>
        <input type="password" name="pass">
      </form>
      <div class="btns">
        <span class="btn">
          login
        </span>
        <span class="btn">
          register
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      logo_src: 'images/logo-wide.png'
    }
  }
}
</script>
