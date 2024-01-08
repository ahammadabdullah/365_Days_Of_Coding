function dayOfProgrammer(year) {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const dayOfProgrammersDay = isLeapYear ? 256 - 244 : 256 - 243;

  const programmersDayDate = new Date(year, 8, dayOfProgrammersDay);
  const day = parseInt(String(programmersDayDate.getDate()).padStart(2, "0"));
  const month = String(programmersDayDate.getMonth() + 1).padStart(2, "0");
  const formattedYear = programmersDayDate.getFullYear();
  let formattedDay = day;
  if (year < 1917 && !isLeapYear) {
    console.log("hi");
    formattedDay--;
  }

  // year < 1917 ? day - 1 : day
  const formattedDate = `${formattedDay}.${month}.${formattedYear}`;
  return formattedDate;
}

console.log(dayOfProgrammer(1914));
