<template>
  <div>
    <template v-if="cyInstance">
      <slot :cy="cyInstance"></slot>
    </template>
  </div>
</template>

<script>
import cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre'
import GraphStyles from './GraphStyles'

export default {
  data() {
    return {
      cyInstance: null
    }
  },
  mounted() {
    cytoscape.use(dagre)

    this.cyInstance = cytoscape({
      container: this.$el,
      style: GraphStyles
    })

    this.cyInstance.on('add', () => {
      this.cyInstance
        .makeLayout({
          name: 'dagre',
          rankDir: 'LR'
        })
        .run()
    })
  }
}
</script>
