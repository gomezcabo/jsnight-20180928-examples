<template>
  <div class="hello">
    <h2>Today: {{ formatted }}</h2>
    <h2>+1 Year: {{ oneYear }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: this.$moment()
    }
  },
  computed: {
    formatted() {
      return this.date.format('DD/MM/YYYY')
    },
    oneYear() {
      return this.date.add(1, 'year').format('DD/MM/YYYY')
    }
  }
}
</script>
