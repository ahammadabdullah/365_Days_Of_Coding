function sockMerchant(n, ar) {
  const sortedArray = ar.sort();
  let pairCount = 0;
  for (let i = 0; i < n - 1; i++) {
    if (sortedArray[i] == sortedArray[i + 1]) {
      pairCount += 1;
      i++;
    } else if (!sortedArray[i] == sortedArray[i + 1]) {
      i--;
    }
  }
  return pairCount;
}
