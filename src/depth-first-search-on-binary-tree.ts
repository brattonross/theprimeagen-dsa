export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

function search<T>(curr: BinaryNode<T> | undefined, target: T): boolean {
  if (!curr) {
    return false;
  }

  if (curr.value === target) {
    return true;
  }

  if (curr.value < target) {
    return search(curr.right, target);
  } else {
    return search(curr.left, target);
  }
}

export function depthFirstSearch<T>(head: BinaryNode<T>, target: T): boolean {
  return search(head, target);
}
