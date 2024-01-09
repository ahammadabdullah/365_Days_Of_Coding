function insertionSort1(n, arr) {
  const target = arr[n - 1];
  let i = n - 2;

  while (i >= 0 && arr[i] > target) {
    arr[i + 1] = arr[i];
    i--;
    console.log(arr.join(" "));
  }
  arr[i + 1] = target;
  console.log(arr.join(" "));
}

// Example usage
const n = 5;
const arr = [2, 4, 6, 8, 3];

insertionSort1(n, arr);
