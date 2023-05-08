import { expect, test } from "vitest";
import {
  breadthFirstSearch,
  type WeightedAdjacencyMatrix,
} from "./breadth-first-search-graph-matrix";

test("breadthFirstSearch", () => {
  //     >(1)<--->(4) ---->(5)
  //    /          |       /|
  // (0)     ------|------- |
  //    \   v      v        v
  //     >(2) --> (3) <----(6)
  const matrix: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1],
  ];

  expect(breadthFirstSearch(matrix, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  expect(breadthFirstSearch(matrix, 6, 0)).toEqual(undefined);
});
