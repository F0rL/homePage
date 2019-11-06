<template>
  <div class="x-time-container">
    <p>{{week}}</p>
    <div class="x-time">
      <span>{{hour}}</span>
      <span>:</span>
      <span>{{minute}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xTime',
  data() {
    return {
      minute: null,
      hour: null,
      week: null
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
      const weekArray = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      this.week = weekArray[moment.getDay()]
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
    margin-left: 40px;
  }
}
</style>
