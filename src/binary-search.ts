function search(
    arr: Array<number>,
    target: number,
    lo: number,
    hi: number
): boolean {
    if (lo >= hi) {
        return false;
    }

    const midIndex = Math.floor(lo + (hi - lo) / 2);
    const midValue = arr[midIndex];
    if (midValue === undefined) {
        throw new Error(`undefined value at index ${midIndex}`);
    }

    if (midValue === target) {
        return true;
    } else if (target > midValue) {
        // Target is larger than the value in the middle, therefore we can
        // limit our search to the upper half of the array (excl midIndex).
        return search(arr, target, midIndex + 1, hi);
    } else {
        // Target is smaller than the value in the middle, therefore we can
        // limit our search to the lower half of the array (incl midIndex).
        return search(arr, target, lo, midIndex);
    }
}

export function binarySearch(arr: Array<number>, target: number): boolean {
    // NOTE: hi is **exclusive**, so we need to pass in arr.length instead of
    // arr.length - 1.
    return search(arr, target, 0, arr.length);
}
