<template>
  <input placeholder="Pick a date"/>
</template>

<script>
/* global $ */
export default {
  props: ['dateFormat'],

  mounted() {
    $(this.$el).datepicker({
      dateFormat: this.dateFormat,
      onSelect: date => {
        this.$emit('update-date', date)
      }
    })
  },

  beforeDestroy() {
    $(this.$el).datepicker('destroy')
  }
}
</script>
