function birthday(s, d, m) {
  let arr = [];
  if (m > 1 && m < s.length) {
    let i = 0;
    while (i < s.length) {
      let cs = s.slice(i, i + m);
      let sum = cs.reduce((acc, curr) => (acc += curr), 0);
      sum === d && arr.push(sum);
      i++;
    }
  } else {
    const elm = s.find((i) => i === d);
    elm && arr.push([elm]);
  }
  return arr.length;
}
