<template>
  <div>
    <template v-if="graphSharedState.cyInstance">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre'
import GraphStyles from './GraphStyles'

export default {
  provide() {
    return {
      graphSharedState: this.graphSharedState
    }
  },
  data() {
    return {
      graphSharedState: {
        cyInstance: null
      }
    }
  },
  mounted() {
    cytoscape.use(dagre)

    this.graphSharedState.cyInstance = cytoscape({
      container: this.$el,
      style: GraphStyles
    })

    this.graphSharedState.cyInstance.on('add', () => {
      this.graphSharedState.cyInstance
        .makeLayout({
          name: 'dagre',
          rankDir: 'TB',
          nodeSep: 150
        })
        .run()
    })
  }
}
</script>
