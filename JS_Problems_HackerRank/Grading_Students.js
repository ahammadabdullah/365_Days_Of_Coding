function gradingStudents(grades) {
  let value = grades.map((v) => {
    return v >= 38 && v % 5 >= 3 ? v - (v % 5) + 5 : v;
  });
  return value;
}
