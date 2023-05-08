import { expect, test } from "vitest";
import { binaryTreePreOrder, type BinaryNode } from "./binary-tree-pre-order";

test("binaryTreePreOrder", () => {
  const tree: BinaryNode<number> = {
    value: 20,
    left: {
      value: 10,
      left: {
        value: 5,
        right: {
          value: 7,
        },
      },
      right: {
        value: 15,
      },
    },
    right: {
      value: 50,
      left: {
        value: 30,
        left: {
          value: 29,
        },
        right: {
          value: 45,
        },
      },
      right: {
        value: 100,
      },
    },
  };

  expect(binaryTreePreOrder(tree)).toEqual([
    20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
  ]);
});
