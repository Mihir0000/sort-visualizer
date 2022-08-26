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

export const selectionSort = (array) => {
    let steps = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        swapAndTrackSteps(array, i, minIndex, steps);
    }
    steps.push({ array: [...array] });
    return [array, steps];
};

export const insertionSort = (array) => {
    let steps = [];
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        while (j >= 0 && array[j + 1] < array[j]) {
            swapAndTrackSteps(array, j + 1, j, steps);
            j--;
        }
    }
    steps.push({ array: [...array] });
    return [array, steps];
};

export const quickSort = (array) => {
    let steps = [];
    quickSortHelper(array, 0, array.length - 1, steps);
    steps.push({ array: [...array] });
    return [array, steps];
};
function quickSortHelper(array, start, end, steps = []) {
    if (start >= end) {
        return;
    }
    const pivot = start;
    let left = start + 1,
        right = end;
    while (left <= right) {
        if (array[left] > array[right]) {
            swapAndTrackSteps(array, left, right, steps);
        }
        if (array[left] <= array[pivot]) {
            left++;
        }
        if (array[right] >= array[pivot]) {
            right--;
        }
    }
    swapAndTrackSteps(array, pivot, right, steps);
    if (right - 1 - start < end - left - 1) {
        quickSortHelper(array, start, right - 1, steps);
        quickSortHelper(array, right + 1, end, steps);
    } else {
        quickSortHelper(array, right + 1, end, steps);
        quickSortHelper(array, start, right - 1, steps);
    }
}

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
