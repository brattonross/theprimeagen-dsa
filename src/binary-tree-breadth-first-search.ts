export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

export function binaryTreeBreadthFirstSearch<T>(
  head: BinaryNode<T>,
  target: T
): boolean {
  const queue = [head];

  while (queue.length) {
    const curr = queue.shift();

    if (curr?.value === target) {
      return true;
    }

    if (curr?.left) {
      queue.push(curr.left);
    }
    if (curr?.right) {
      queue.push(curr.right);
    }
  }

  return false;
}
