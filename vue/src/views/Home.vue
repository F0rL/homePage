<template>
  <div class="home" style="{back}">home</div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.$http.get('/static/bg').then(res => {
      console.log(res)
    })
  },
  components: {}
}
</script>

<style lang="scss">
</style>
