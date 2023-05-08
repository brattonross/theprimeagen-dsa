export type WeightedAdjacencyMatrix = Array<Array<number>>;

export function breadthFirstSearch(
  graph: WeightedAdjacencyMatrix,
  source: number,
  target: number
): Array<number> | undefined {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const queue = [source];

  do {
    const curr = queue.shift()!;
    if (curr === target) {
      break;
    }

    const adjacencies = graph[curr];
    for (let i = 0; i < graph.length; i++) {
      if (adjacencies[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      queue.push(i);
    }
  } while (queue.length);

  if (prev[target] === -1) {
    return undefined;
  }

  let curr = target;
  const out: Array<number> = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
}
