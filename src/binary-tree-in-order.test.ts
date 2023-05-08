import { expect, test } from "vitest";
import { binaryTreeInOrder, type BinaryNode } from "./binary-tree-in-order";

test("binaryTreeInOrder", () => {
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

  expect(binaryTreeInOrder(tree)).toEqual([
    5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
  ]);
});
