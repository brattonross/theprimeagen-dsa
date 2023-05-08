export type GraphEdge = { to: number; weight: number };
export type WeightedAdjacencyList = Array<Array<GraphEdge>>;

function hasUnvisited(seen: Array<boolean>, distances: Array<number>): boolean {
  let has = false;

  for (let i = 0; i < seen.length; i++) {
    if (!seen[i] && distances[i] < Infinity) {
      has = true;
      break;
    }
  }

  return has;
}

function getLowestUnvisited(
  seen: Array<boolean>,
  distances: Array<number>
): number {
  let index = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) {
      continue;
    }

    if (lowestDistance > distances[i]) {
      lowestDistance = distances[i];
      index = i;
    }
  }

  return index;
}

export function dijkstraList(
  source: number,
  sink: number,
  graph: WeightedAdjacencyList
): Array<number> | undefined {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  const distances = new Array(graph.length).fill(Infinity);

  distances[source] = 0;

  while (hasUnvisited(seen, distances)) {
    const curr = getLowestUnvisited(seen, distances);
    seen[curr] = true;

    const adjacencies = graph[curr];
    for (let i = 0; i < adjacencies.length; i++) {
      const edge = adjacencies[i];
      if (seen[edge.to]) {
        continue;
      }

      const distance = distances[curr] + edge.weight;
      if (distance < distances[edge.to]) {
        distances[edge.to] = distance;
        prev[edge.to] = curr;
      }
    }
  }

  const out: Array<number> = [];
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  if (out.length === 0) {
    return undefined;
  }

  out.push(source);
  return out.reverse();
}
