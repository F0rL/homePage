<template>
  <div>
    天气
  </div>
</template>

<script>
export default {
  name: 'HomeWether',
  props: {
    whetherInfo: {
      require: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">

</style>
