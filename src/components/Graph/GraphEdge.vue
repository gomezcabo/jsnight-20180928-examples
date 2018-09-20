<script>
export default {
  props: ['edge'],
  inject: ['graphState'],

  mounted() {
    this.graphState.cyInstance.add({
      group: 'edges',
      id: this.edge.id,
      data: { ...this.edge }
    })
  },

  render() {
    return null
  }
}
</script>
