import { expect, test } from "vitest";
import {
  depthFirstSearch,
  type BinaryNode,
} from "./depth-first-search-on-binary-tree";

test("depthFirstSearch", () => {
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

  expect(depthFirstSearch(tree, 45)).toEqual(true);
  expect(depthFirstSearch(tree, 7)).toEqual(true);
  expect(depthFirstSearch(tree, 69)).toEqual(false);
});
