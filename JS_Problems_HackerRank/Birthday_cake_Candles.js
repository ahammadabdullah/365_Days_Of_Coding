function birthdayCakeCandles(candles) {
  const m = Math.max(...candles);

  const count = candles.filter((item) => item === m).length;
  return count;
}
