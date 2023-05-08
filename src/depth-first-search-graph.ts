export type GraphEdge = { to: number; weight: number };
export type WeightedAdjacencyList = Array<Array<GraphEdge>>;

function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  target: number,
  seen: Array<boolean>,
  path: Array<number>
): boolean {
  if (seen[curr]) {
    return false;
  }

  seen[curr] = true;
  path.push(curr);
  if (curr === target) {
    return true;
  }

  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];

    if (walk(graph, edge.to, target, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
}

export function depthFirstSearch(
  graph: WeightedAdjacencyList,
  source: number,
  target: number
): Array<number> | undefined {
  const seen = new Array(graph.length).fill(false);
  const path: Array<number> = [];

  walk(graph, source, target, seen, path);
  if (path.length === 0) {
    return undefined;
  }

  return path;
}
