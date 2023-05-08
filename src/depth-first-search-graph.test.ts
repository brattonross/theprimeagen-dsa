import { expect, test } from "vitest";
import {
  depthFirstSearch,
  type WeightedAdjacencyList,
} from "./depth-first-search-graph";

test("depthFirstSearch", () => {
  //     >(1)<--->(4) ---->(5)
  //    /          |       /|
  // (0)     ------|------- |
  //    \   v      v        v
  //     >(2) --> (3) <----(6)
  const list: WeightedAdjacencyList = [
    [
      { to: 1, weight: 3 },
      { to: 2, weight: 1 },
    ],
    [{ to: 4, weight: 1 }],
    [{ to: 3, weight: 7 }],
    [],
    [
      { to: 1, weight: 1 },
      { to: 3, weight: 5 },
      { to: 5, weight: 2 },
    ],
    [
      { to: 2, weight: 18 },
      { to: 6, weight: 1 },
    ],
    [{ to: 3, weight: 1 }],
  ];

  expect(depthFirstSearch(list, 0, 6)).toEqual([0, 1, 4, 5, 6]);
  expect(depthFirstSearch(list, 6, 0)).toEqual(undefined);
});
