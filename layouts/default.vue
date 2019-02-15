<template>
  <div class="loyal">
    <loyal-header />
    <main class="main">
      <loyal-sidebar />
      <div class="page">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import LoyalHeader from '~/components/LoyalHeader'
import LoyalSidebar from '~/components/LoyalSidebar'
export default {
  components: {
    LoyalHeader,
    LoyalSidebar
  }
}
</script>
