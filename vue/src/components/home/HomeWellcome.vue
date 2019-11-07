<template>
  <div class="x-time-container">
    <p>{{wellCome}}</p>
    <div class="x-time">
      <span>{{hour}}</span>
      <span>:</span>
      <span>{{minute}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWellcome',
  data() {
    return {
      minute: null,
      hour: null,
      wellCome: null
    }
  },
  mounted() {
    this.updateTime()
  },
  methods: {
    getTime() {
      let moment = new Date()
      this.minute = this.formateTime(moment.getMinutes())
      this.hour = this.formateTime(moment.getHours())
      if (this.hour >= 6 && this.hour < 12) {
        this.wellCome = '早上好'
      } else if (this.hour >= 12 && this.hour < 18) {
        this.wellCome = '下午好'
      } else {
        this.wellCome = '晚上好'
      }
    },
    updateTime() {
      this.timerId = setInterval(this.getTime(), 1000)
    },
    clearTimerId() {
      clearInterval(this.timerId)
    },
    formateTime(val) {
      if (val < 10) {
        val = '0' + val
      }
      return val
    }
  }
}
</script>

<style scoped lang="scss">
.x-time-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .x-time {
    margin-left: 20px;
  }
}
</style>
