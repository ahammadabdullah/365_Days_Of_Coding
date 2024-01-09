// function dayOfProgrammer(year) {
//   let dayOfProgrammersDay;

//   if (year === 1918) {
//     // Transition year (13 days were skipped)
//     dayOfProgrammersDay = 256 - 230;
//   } else if (year > 1918) {
//     // Gregorian calendar
//     const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
//     dayOfProgrammersDay = isLeapYear ? 256 - 244 : 256 - 243;
//   } else {
//     // Julian calendar
//     const isLeapYearJulian = year % 4 === 0;
//     dayOfProgrammersDay = isLeapYearJulian ? 256 - 245 : 256 - 244;
//   }

//   const programmersDayDate = new Date(year, 8, dayOfProgrammersDay);
//   const day = String(programmersDayDate.getDate()).padStart(2, "0");
//   const month = String(programmersDayDate.getMonth() + 1).padStart(2, "0");
//   const formattedYear = programmersDayDate.getFullYear();

//   const formattedDate = `${day}.${month}.${formattedYear}`;
//   return formattedDate;
// }

function dayOfProgrammer(year) {
  let isLeapYear = year % 4 === 0;
  if (year >= 1918)
    isLeapYear = year % 400 === 0 || (isLeapYear && year % 100 !== 0);
  let day = isLeapYear ? 12 : 13;
  if (year === 1918) day += 13;
  return `${day}.09.${year}`;
}

console.log(dayOfProgrammer(1015));
