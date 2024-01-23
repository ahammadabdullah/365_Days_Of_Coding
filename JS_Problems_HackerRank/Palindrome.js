const isPalindrome = (string) => {
  const regex = /[^a-zA-Z0-9]/g;
  const newString = string.replace(regex, "").toLowerCase();
  const reverseString = newString.split("").reverse().join("");
  return newString === reverseString;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
