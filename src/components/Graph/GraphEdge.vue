<script>
export default {
  props: ['cy', 'edge'],

  mounted() {
    this.cy.add({
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
