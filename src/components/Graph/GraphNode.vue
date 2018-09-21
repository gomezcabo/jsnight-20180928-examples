<script>
export default {
  props: ['node'],
  inject: ['graphSharedState'],

  mounted() {
    this.graphSharedState.cyInstance.add({
      group: 'nodes',
      id: this.node.id,
      data: { ...this.node }
    })
  },

  render() {
    return null
  }
}
</script>
