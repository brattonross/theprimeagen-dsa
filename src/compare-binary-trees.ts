export type BinaryNode<T> = {
  value: T;
  left?: BinaryNode<T>;
  right?: BinaryNode<T>;
};

export function compareBinaryTrees<T>(
  a?: BinaryNode<T>,
  b?: BinaryNode<T>
): boolean {
  if (a === undefined && b === undefined) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  return (
    compareBinaryTrees(a.left, b.left) && compareBinaryTrees(a.right, b.right)
  );
}
