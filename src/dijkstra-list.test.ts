import { expect, test } from "vitest";
import { dijkstraList, type WeightedAdjacencyList } from "./dijkstra-list";

test("dijkstraList", () => {
  //      (1) --- (4) ---- (5)
  //    /  |       |       /|
  // (0)   | ------|------- |
  //    \  |/      |        |
  //      (2) --- (3) ---- (6)
  const list: WeightedAdjacencyList = [
    [
      { to: 1, weight: 3 },
      { to: 2, weight: 1 },
    ],
    [
      { to: 0, weight: 3 },
      { to: 2, weight: 4 },
      { to: 4, weight: 1 },
    ],
    [
      { to: 1, weight: 4 },
      { to: 3, weight: 7 },
      { to: 0, weight: 1 },
    ],
    [
      { to: 2, weight: 7 },
      { to: 4, weight: 5 },
      { to: 6, weight: 1 },
    ],
    [
      { to: 1, weight: 1 },
      { to: 3, weight: 5 },
      { to: 5, weight: 2 },
    ],
    [
      { to: 6, weight: 1 },
      { to: 4, weight: 2 },
      { to: 2, weight: 18 },
    ],
    [
      { to: 3, weight: 1 },
      { to: 5, weight: 1 },
    ],
  ];

  expect(dijkstraList(0, 6, list)).toEqual([0, 1, 4, 5, 6]);
});
