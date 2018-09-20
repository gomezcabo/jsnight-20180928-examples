<template>
  <div>
    <template v-if="sharedState.cyInstance">
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
      graphState: this.sharedState
    }
  },
  data() {
    return {
      sharedState: {
        cyInstance: null
      }
    }
  },
  mounted() {
    cytoscape.use(dagre)

    this.sharedState.cyInstance = cytoscape({
      container: this.$el,
      style: GraphStyles
    })

    this.sharedState.cyInstance.on('add', () => {
      this.sharedState.cyInstance
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
