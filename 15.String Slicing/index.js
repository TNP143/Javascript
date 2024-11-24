//string slicing = creating a substring from a portion of another string

//      string.slice(start,end)

const fullnames = "nakatashi nakamoto" ;

let fnames = fullnames.slice(0,3);
console.log(fnames); // "nak"
//ตัดส่วนของสตริงจากตำแหน่งที่ 0 ถึง 2 (ตำแหน่ง 3 ไม่ถูกรวม)

let lastname = fullnames.slice(15,18);
console.log(lastname); // "oto"

let las1nam = fullnames.slice(-3);
console.log(las1nam);// "oto"
//ใช้ค่าติดลบเพื่อเริ่มตัดจากท้ายสตริง โดย -3 หมายถึงเริ่มจากตัวอักษรที่ 3 นับจากท้ายสุด

let fnnname = fullnames.slice(0, fullnames.indexOf(" "));
//ใช้ indexOf() เพื่อตัดตั้งแต่ตำแหน่งที่ 0 ถึงก่อนช่องว่างแรก (" ")
let fnnname1 = fullnames.slice( fullnames.indexOf(" ") + 1);
//เริ่มตัดตั้งแต่หลังช่องว่าง (+1) เพื่อข้ามช่องว่างและได้เฉพาะนามสกุล

console.log(fnnname);
console.log(fnnname1);

const email = "akataka@gmail.com";

let username = email.slice(0, email.indexOf("@"));
//ตัดส่วนของอีเมลตั้งแต่ตำแหน่งที่ 0 จนถึงก่อนเครื่องหมาย "@"

let extension = email.slice(email.indexOf("@"))
//ตัดส่วนของอีเมลตั้งแต่เครื่องหมาย "@" จนถึงท้ายสุด

console.log(username)
console.log(extension)
