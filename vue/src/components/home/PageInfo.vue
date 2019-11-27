<template>
  <div class="page-info-wrapper">
    <p>© 2019 鄂ICP备18028658号</p>
    <p class="github-info">
      <x-icon name="github" />
      <a href="https://github.com/F0rL" class="github-link">github.com/F0rl</a>
    </p>
  </div>
</template>

<script>
import xIcon from '../common/xIcon'
export default {
  name: 'PageInfo',
  components: {
    xIcon
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style/global.scss';
.page-info-wrapper {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  @include center;
  font-size: 14px;
  color: #ccc;
  .github-info {
    @include center;
    margin-left: 10px;
    .github-link {
      color: #ccc;
      margin-left: 5px;
    }
  }
}
</style>
