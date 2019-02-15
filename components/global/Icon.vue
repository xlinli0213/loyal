<template>
  <svg class="icon" :class="className">
    <use :xlink:href="href" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    className() {
      return `icon-${this.name}`
    },
    href() {
      return `#${this.name}`
    }
  }
}
</script>
