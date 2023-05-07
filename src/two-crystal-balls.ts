export function twoCrystalBalls(arr: Array<boolean>): number {
    const jumpAmount = Math.floor(Math.sqrt(arr.length));
    let i = jumpAmount;
    for (; i < arr.length; i += jumpAmount) {
        if (arr[i]) {
            // true means that the ball breaks, at this point we now need to walk
            // from the previous index to the current index to find the first index
            // where the ball breaks.
            break;
        }
    }
    for (let j = i - jumpAmount; j < i; ++j) {
        if (arr[j]) {
            return j;
        }
    }
    return -1;
}
