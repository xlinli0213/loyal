<template>
  <div class="header">
    <div class="header__left">
      <img class="logo" :src="resolve(logo_src)" alt="logo">T-Mobile Extra
    </div>
    <div class="header__right">
      <div class="btns">
        <loyal-icon name="return" />
        <loyal-icon name="fullscreen" />
      </div>
      <div class="user">
        welcome<loyal-icon name="exit" />
      </div>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoyalHeader',
  data() {
    return {
      logo_src: 'images/logo-wide-white.png'
    }
  }
}
</script>
