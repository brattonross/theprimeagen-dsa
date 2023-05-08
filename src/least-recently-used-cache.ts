class Node<T> {
  constructor(public value: T, public next?: Node<T>, public prev?: Node<T>) {}
}

export class LeastRecentlyUsed<K, V> {
  private length = 0;
  private head?: Node<V>;
  private tail?: Node<V>;
  private lookup: Map<K, Node<V>> = new Map();
  private reverseLookup: Map<Node<V>, K> = new Map();

  constructor(private capacity: number) {}

  public update(key: K, value: V): void {
    let node = this.lookup.get(key);

    if (!node) {
      node = new Node(value);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  public get(key: K): V | undefined {
    const node = this.lookup.get(key);
    if (!node) {
      return undefined;
    }

    this.detach(node);
    this.prepend(node);

    return node.value;
  }

  private detach(node: Node<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.prev = undefined;
    node.next = undefined;
  }

  private prepend(node: Node<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail!;
    this.detach(tail);

    const key = this.reverseLookup.get(tail)!;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
