function timeConversion(s) {
  let hour = s.slice(0, 2);
  let pm = /PM/.test(s);
  let is12 = hour === "12";
  s = s.replace(pm ? "PM" : "AM", "");

  if (pm) {
    if (is12) return s;
    let h2 = parseInt(hour) + 12 + "";
    return s.replace(hour, h2);
  } else return is12 ? s.replace(hour, "00") : s;
}
