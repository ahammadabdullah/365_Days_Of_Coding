function plusMinus(arr) {
  const positiveNumber = arr.filter((n) => n > 0);
  const negativeNumber = arr.filter((n) => n < 0);
  const zeros = arr.filter((n) => n === 0);

  const positiveNumberRatio = positiveNumber.length / arr.length;
  const negativeNumberRatio = negativeNumber.length / arr.length;
  const zeroRatio = zeros.length / arr.length;

  console.log(positiveNumberRatio);
  console.log(negativeNumberRatio);
  console.log(zeroRatio);
  return;
}
