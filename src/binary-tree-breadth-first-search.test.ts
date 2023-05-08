import { expect, test } from "vitest";
import {
  binaryTreeBreadthFirstSearch,
  type BinaryNode,
} from "./binary-tree-breadth-first-search";

test("binaryTreeBreadthFirstSearch", () => {
  const tree: BinaryNode<number> = {
    value: 20,
    right: {
      value: 50,
      right: {
        value: 100,
      },
      left: {
        value: 30,
        right: {
          value: 45,
        },
        left: {
          value: 29,
        },
      },
    },
    left: {
      value: 10,
      right: {
        value: 15,
      },
      left: {
        value: 5,
        right: {
          value: 7,
        },
      },
    },
  };

  expect(binaryTreeBreadthFirstSearch(tree, 45)).toEqual(true);
  expect(binaryTreeBreadthFirstSearch(tree, 7)).toEqual(true);
  expect(binaryTreeBreadthFirstSearch(tree, 69)).toEqual(false);
});
