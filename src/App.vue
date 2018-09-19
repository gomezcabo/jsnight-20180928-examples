<template>
  <div id="app">
    <h2>Date:</h2>
    <DatePicker date-format="dd/mm/yy" @update-date="alertDate"/>
  </div>
</template>

<script>
import DatePicker from './components/DatePicker'

export default {
  name: 'App',
  methods: {
    alertDate(date) {
      alert(`Selected date: ${date}`)
    }
  },
  components: {
    DatePicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
