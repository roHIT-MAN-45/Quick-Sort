/*
Pivot
*/

/*
Pseudocode
⚡ It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length - 1, respectively).
⚡ Grab the pivot from the start of the array.
⚡ Store the current pivot index in a variable (this will keep track of where the pivot should end up).
⚡ If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with element at the pivot index.
⚡ Swap the starting element (i.e. the pivot) with the pivot index.
⚡ Return the pivot index.
*/

/*
Time Complexity (Best) = O(n log n)
Time Complexity (Average) = O(n log n)
Time Complexity (Worst) = O(n^2)
Space Complexity = O(log n)
*/

function pivot(arr, start, end) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      let temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;
  return swapIndex;
}

/* 
Quick Sort
*/

/*
Pseudocode
⚡ Call the pivot helper on the array.
⚡ When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
⚡ Your base case occurs when you consider a subarray with less than 2 elements.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length <= 1) {
    return arr;
  }
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([5, 6, 1, 2, 35, 44, 67, 4]));
