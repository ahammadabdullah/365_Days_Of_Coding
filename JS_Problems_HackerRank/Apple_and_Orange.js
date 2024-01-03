function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesAc = 0;
  let orangesAc = 0;

  while (oranges.length > 0 || apples.length > 0) {
    if (apples.length > 0) {
      const ap = apples[0];
      const sumA = a + ap;
      if (sumA >= s && sumA <= t) {
        applesAc++;
      }
      apples.shift();
    }
    if (oranges.length) {
      const ora = oranges[0];
      const sumO = b + ora;
      if (sumO >= s && sumO <= t) {
        orangesAc++;
      }
      oranges.shift();
    }
  }

  console.log(applesAc);
  console.log(orangesAc);
}
