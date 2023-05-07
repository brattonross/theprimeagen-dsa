function qs(arr: Array<number>, lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIndex = partition(arr, lo, hi);
    qs(arr, lo, pivotIndex - 1);
    qs(arr, pivotIndex + 1, hi);
}

function partition(arr: Array<number>, lo: number, hi: number): number {
    const pivot = arr[hi];

    let index = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    return index;
}

export function quickSort(arr: Array<number>): void {
    qs(arr, 0, arr.length - 1);
}
