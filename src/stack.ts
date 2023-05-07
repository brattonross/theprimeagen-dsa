type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export class Stack<T> {
    private head?: Node<T>;

    public length: number = 0;

    public push(value: T): void {
        const node = { value } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    public pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        if (this.length === 0) {
            this.head = undefined;
        } else {
            this.head = head.prev;
        }
        return head.value;
    }

    public peek(): T | undefined {
        return this.head?.value;
    }
}
