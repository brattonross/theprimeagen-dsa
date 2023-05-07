type Node<T> = {
    value: T;
    next?: Node<T>;
};

export class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;

    public length: number = 0;

    public enqueue(value: T): void {
        this.length++;
        const node = { value } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    public deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;

        // In JS/TS, the GC takes care of freeing up the memory for us,
        // but as an example of what you would do in languages without this
        // built in, we will clean up head's next pointer here.
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    public peek(): T | undefined {
        return this.head?.value;
    }
}
