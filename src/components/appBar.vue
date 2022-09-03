<template>
<div>
  <div class="d-flex align-center bg-primary px-3 py-5 white--text" style="font-size:1.5rem">
    {{ pageTitle }}
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  computed: {
    pageTitle() {
      return this.$route?.meta?.pageTitle || '-'
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-primary {
  background-color: #2e97ff;
}
</style>
