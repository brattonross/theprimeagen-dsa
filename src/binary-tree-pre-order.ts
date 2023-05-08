export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

function walk<T>(curr?: BinaryNode<T>, path: Array<T> = []): Array<T> {
  if (!curr) {
    return path;
  }

  path.push(curr.value);

  walk(curr.left, path);
  walk(curr.right, path);

  return path;
}

export function binaryTreePreOrder<T>(head: BinaryNode<T>): Array<T> {
  return walk(head);
}
