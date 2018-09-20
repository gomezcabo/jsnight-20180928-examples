<template>
  <div id="app">
    <Graph class="app-graph">
      <GraphNode v-for="node in nodes" :key="node.id" :node="node"/>
      <GraphEdge v-for="edge in edges" :key="edge.id" :edge="edge"/>
    </Graph>
  </div>
</template>

<script>
import Graph from './components/Graph'
import GraphNode from './components/Graph/GraphNode'
import GraphEdge from './components/Graph/GraphEdge'

export default {
  data() {
    return {
      nodes: [
        { id: 'N1', label: 'Start' },
        { id: 'N2', label: '4' },
        { id: 'N3', label: '1' },
        { id: 'N4', label: '8' },
        { id: 'N5', label: '15' },
        { id: 'N6', label: '23' },
        { id: 'N7', label: '42' },
        { id: 'N8', label: 'End' }
      ],
      edges: [
        { id: 'E1', source: 'N1', target: 'N2' },
        { id: 'E2', source: 'N2', target: 'N3' },
        { id: 'E3', source: 'N3', target: 'N6' },
        { id: 'E4', source: 'N2', target: 'N4' },
        { id: 'E5', source: 'N4', target: 'N5' },
        { id: 'E6', source: 'N5', target: 'N4', label: '2' },
        { id: 'E7', source: 'N5', target: 'N6' },
        { id: 'E8', source: 'N6', target: 'N7' },
        { id: 'E9', source: 'N7', target: 'N7', label: '3' },
        { id: 'E10', source: 'N7', target: 'N8' }
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
