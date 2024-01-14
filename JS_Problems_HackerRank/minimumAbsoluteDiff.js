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
// console.log(minimumAbsoluteDifference(arr));

// What Javascript statement in place of "?" will make the result always be between 6 and 7?
const x = 2;
let y = 4;
function update(arg) {
  return Math.random() + y * arg;
}
y = 2;
const result = update(x) + (3 - Math.random());
console.log(result);
