// ternary operator = a shortcut to if and else statements helps to assign a variable based on a condition
// code = conditions? code if true : code if false

let age = 21

let message = age >= 18 ? "dewasa" : "BocilXKematian"
// ถ้าอายุ >= 18 จะเป็น "dewasa" ถ้าไม่ใช่จะเป็น "BocilXKematian"

console.log(message);

// bisa true false trus x : y

let purchaseamount = 100;
let diskon = purchaseamount >= 100? 10 : 0;
// ถ้ายอดซื้อ >= 100 ได้ส่วนลด 10%, ถ้าน้อยกว่า 100 ได้ส่วนลด 0%
console.log(`your total is $${purchaseamount - purchaseamount * (diskon/100)}`)
