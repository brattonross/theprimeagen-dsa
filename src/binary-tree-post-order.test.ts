import { expect, test } from "vitest";
import { binaryTreePostOrder, type BinaryNode } from "./binary-tree-post-order";

test("binaryTreePostOrder", () => {
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

  expect(binaryTreePostOrder(tree)).toEqual([
    7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
  ]);
});
