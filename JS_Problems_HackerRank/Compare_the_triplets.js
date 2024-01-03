function compareTriplets(a, b) {
  let x = 0;
  let y = 0;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      x += 1;
    } else if (b[i] > a[i]) {
      y += 1;
    }
  }

  return [x, y];
}
