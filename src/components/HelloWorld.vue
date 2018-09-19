<template>
  <div>
    <h2>Elements:</h2>
    <h3>{{ randomNumber }}</h3>

    <h2>Random Numbers:</h2>
    <h3>
      <span v-for="n in randomRange" :key="n">
        {{ $lodash.random(100) }}
      </span>
    </h3>
  </div>
</template>

<script>
const MAX_ELEMENTS = 10

export default {
  data() {
    return {
      randomNumber: 1 + this.$lodash.random(MAX_ELEMENTS - 1)
    }
  },
  computed: {
    randomRange() {
      return this.$lodash.range(0, this.randomNumber)
    }
  }
}
</script>
