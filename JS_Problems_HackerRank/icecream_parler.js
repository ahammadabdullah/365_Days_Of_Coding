function iceCreamParlor(m, cost) {
  const array = [];

  for (let i = 0; i < cost.length - 1; i++) {
    for (let j = i + 1; j < cost.length; j++) {
      if (cost[i] + cost[j] === m) {
        array.push(i + 1);
        array.push(j + 1);
        return array;
      }
    }
  }
  return null;
}
