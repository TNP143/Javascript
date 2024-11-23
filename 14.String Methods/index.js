// string methods = allow you to manipulate and work with text (strings)

let userName = "  Xnaizerrre";

console.log(userName.charAt(0));
//แสดงตัวอักษรที่ตำแหน่งที่ 0 ของสตริง

console.log(userName.indexOf("i"));
// คืนค่าตำแหน่งของตัวอักษร "i" ตัวแรกที่พบ

console.log(userName.lastIndexOf("e"));
/คืนค่าตำแหน่งของตัวอักษร "e" ตัวสุดท้าย


console.log(userName.length)
//แสดงความยาวของสตริง (รวมช่องว่าง)

console.log(userName.trim())//ลบช่องว่าง (whitespace) ด้านหน้าและด้านหลังของสตริง
console.log(userName.toUpperCase()) // แปลงสตริงเป็นตัวพิมพ์ใหญ่ทั้งหมด
console.log(userName.toLowerCase()) // แปลงสตริงเป็นตัวพิมพ์เล็กทั้งหมด
console.log(userName.repeat(3)) // ทำซ้ำสตริง 3 ครั้งต่อเนื่องกัน

let result = userName.startsWith(" ")
console.log(result)

let result1 = userName.startsWith("x")
console.log(result1)

let result2 = userName.endsWith("e")
console.log(result2)

let result3 = userName.includes("x")
console.log(result3)

let result4 = userName.includes("X")
console.log(result4)


let pnum = "121-213141-412";
pnum = pnum.replaceAll("-","");
console.log(pnum)
//แทน-ด้วยช่องว่าง

let pnum1 = "121-213141-412";
pnum1 = pnum1.padStart(18,"+62 ");
console.log(pnum1)
//เติมข้อความ " +62 " ด้านหน้าจนกว่าสตริงจะมีความยาว 18 ตัวอักษร

let pnum2= "121-213141-412";
pnum2 = pnum2.padEnd(18,"0");
console.log(pnum2)
//เติม "0" ต่อท้ายจนสตริงมีความยาว 18 ตัวอักษร

let pnum3 = "121-213141-412";
pnum3 = pnum3.padStart(18,"+62 ").replaceAll("-","");
console.log(pnum3)
//เติม " +62 " ด้านหน้าและลบเครื่องหมายขีดกลาง (-) ทั้งหมดในสตริง
