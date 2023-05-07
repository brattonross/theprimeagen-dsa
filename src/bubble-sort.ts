function pass(arr: Array<number>, maxIndex: number) {
    for (let i = 0; i < maxIndex; i++) {
        if (arr[i] > arr[i + 1]) {
            // swap
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}

export function bubbleSort(arr: Array<number>): void {
    for (let i = arr.length - 1; i > 0; i--) {
        pass(arr, i);
    }
}
