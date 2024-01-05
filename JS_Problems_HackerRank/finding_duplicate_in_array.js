const findingDuplicate = (arr) => {
  return [...new Set(arr)];
};

const arr = [1, 2, 3, 3, 4, 4, 6, 6];

console.log(findingDuplicate(arr));
