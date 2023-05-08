export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

function walk<T>(curr?: BinaryNode<T>, path: Array<T> = []): Array<T> {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
}

export function binaryTreeInOrder<T>(head: BinaryNode<T>): Array<T> {
  return walk(head, []);
}
