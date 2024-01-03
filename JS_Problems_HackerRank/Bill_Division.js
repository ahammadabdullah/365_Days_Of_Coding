function bonAppetit(bill, k, b) {
  let itemsEaten = [...bill];
  itemsEaten.splice(k, 1);
  const totalBill = itemsEaten.reduce((a, b) => a + b);
  if (b == totalBill / 2) {
    console.log("Bon Appetit");
  } else {
    console.log(b - totalBill / 2);
  }
}
