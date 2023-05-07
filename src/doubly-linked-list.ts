type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export class LinkedList<T> {
    private head?: Node<T>;
    private tail?: Node<T>;

    public length: number = 0;

    public prepend(value: T): void {
        const node = { value } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    public insertAt(value: T, index: number): void {
        if (index > this.length) {
            throw new Error(`Index out of bounds: ${index}`);
        } else if (index === this.length) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        }

        this.length++;
        const curr = this.getAt(index)!;
        const node = { value } as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            node.prev.next = curr;
        }
    }

    public append(value: T): void {
        this.length++;
        const node = { value } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    public remove(value: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === value) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    public get(index: number): T | undefined {
        return this.getAt(index)?.value;
    }

    public removeAt(index: number): T | undefined {
        const node = this.getAt(index);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private getAt(index: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }
        return curr;
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }
}
