export const bubbleSort = (array) => {
    let steps = [];
    let isSorted = false;
    let i = 0;
    while (!isSorted) {
        isSorted = true;
        for (let j = 1; j < array.length - i; j++) {
            if (array[j] < array[j - 1]) {
                swapAndTrackSteps(array, j, j - 1, steps);
                isSorted = false;
            }
        }
        i++;
    }
    steps.push({ array: [...array] });
    return [array, steps];
};

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function swapAndTrackSteps(array, i, j, steps) {
    swap(array, i, j);
    steps.push({
        array: [...array],
        swapPositions: [i, j],
    });
}
