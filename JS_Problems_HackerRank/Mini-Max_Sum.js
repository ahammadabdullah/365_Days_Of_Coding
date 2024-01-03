function miniMaxSum(arr) {
  console.log(
    arr.reduce((a, b) => a + b, 0) - Math.max(...arr),
    arr.reduce((a, b) => a + b, 0) - Math.min(...arr)
  );
}
