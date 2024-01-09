function camelcase(s) {
  const words = s.split(/[A-Z]/);
  return words.length;
}

const s = "helloNewWorld";

console.log(camelcase(s));
