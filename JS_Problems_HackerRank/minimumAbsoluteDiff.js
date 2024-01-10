function minimumAbsoluteDifference(arr) {
  let min = Math.abs(arr[0] - arr[1]);
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}

const arr = [3, -7, 0];
console.log(minimumAbsoluteDifference(arr));
