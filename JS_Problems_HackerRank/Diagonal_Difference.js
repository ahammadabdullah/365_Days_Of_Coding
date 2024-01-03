function diagonalDifference(arr) {
  const n = arr.length;
  let x = 0;
  let y = 0;

  for (let i = 0; i < n; i++) {
    x += arr[i][i];
    y += arr[i][n - 1 - i];
  }

  console.log(x);
  return Math.abs(x - y);
}
