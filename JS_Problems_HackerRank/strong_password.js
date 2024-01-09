function minimumNumber(n, password) {
  let result = 0;
  const numbersRegex = /[0-9]/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const specialCharactersRegex = /[!@#$%^&*()+-]/;

  const lengthToAdd = Math.max(0, 6 - n);
  if (!numbersRegex.test(password)) {
    result++;
    console.log("number");
  }

  if (!lowercaseRegex.test(password)) {
    result++;
    console.log("lower");
  }

  if (!uppercaseRegex.test(password)) {
    console.log("upper");

    result++;
  }

  if (!specialCharactersRegex.test(password)) {
    console.log("spcial");

    result++;
  }
  return Math.max(result, lengthToAdd);
}

console.log(minimumNumber(7, "AUzs-nV"));
