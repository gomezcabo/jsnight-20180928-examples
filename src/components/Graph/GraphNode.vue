<script>
export default {
  props: ['node'],
  inject: ['graphState'],

  mounted() {
    this.graphState.cyInstance.add({
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
