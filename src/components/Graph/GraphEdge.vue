<script>
export default {
  props: ['edge'],
  inject: ['graphSharedState'],

  mounted() {
    this.graphSharedState.cyInstance.add({
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
