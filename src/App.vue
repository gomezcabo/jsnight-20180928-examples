<template>
  <div id="app">
    <Graph class="app-graph">
      <template slot-scope="{ cy }">
        <GraphNode
          v-for="node in nodes"
          :key="node.id"
          :cy="cy"
          :node="node"
        />
        <GraphEdge
          v-for="edge in edges"
          :key="edge.id"
          :cy="cy"
          :edge="edge"
        />
      </template>
    </Graph>
  </div>
</template>

<script>
import Graph from './components/Graph/Graph'
import GraphNode from './components/Graph/GraphNode'
import GraphEdge from './components/Graph/GraphEdge'

export default {
  data() {
    return {
      nodes: [
        { id: 'N1', label: 'LUKE' },
        { id: 'N2', label: 'VADER' },
        { id: 'N4', label: 'ELLIE' },
        { id: 'N3', label: 'BARRY' },
        { id: 'N5', label: 'SARA' },
        { id: 'N6', label: 'SAM' },
        { id: 'N7', label: 'ME' },
      ],
      edges: [
        { id: 'E1', source: 'N1', target: 'N2', label: 'son of' },
        { id: 'E2', source: 'N2', target: 'N4', label: 'brother of' },
        { id: 'E3', source: 'N2', target: 'N3', label: 'uncle of' },
        { id: 'E4', source: 'N4', target: 'N3', label: 'aunt of' },
        { id: 'E6', source: 'N3', target: 'N6', label: 'cousin of' },
        { id: 'E5', source: 'N3', target: 'N5', label: 'cousin of' },
        { id: 'E7', source: 'N5', target: 'N6', label: 'sister of' },
        { id: 'E8', source: 'N6', target: 'N7', label: 'attended Naboo University with' },
      ]
    }
  },
  components: {
    Graph,
    GraphNode,
    GraphEdge
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.app-graph {
  flex: 1;
}
</style>
