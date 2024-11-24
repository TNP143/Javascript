// Method chaining = calling one method after another in one continious line of codes

let username = window.prompt("Enter Your Username :");

// // NO METHOD CHAINING


//username = username.trim();  // ตัดช่องว่างหน้า-หลัง
//let letter = username.charAt(0);  // ดึงตัวอักษรตัวแรก
//letter = letter.toUpperCase();  // แปลงตัวแรกเป็นตัวพิมพ์ใหญ่
//let extrachars = username.slice(1);  // ตัดส่วนที่เหลือของสตริง (ยกเว้นตัวแรก)
//extrachars = extrachars.toLowerCase();  // แปลงส่วนที่เหลือเป็นตัวพิมพ์เล็ก
//username = letter + extrachars;  // รวมตัวแรกกับส่วนที่เหลือ

console.log(username);

// //    xNaiZer 
// // menjadi
// //Xnaizer


// METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//username.trim()ลบช่องว่างหน้าและหลังสตริง
//username.trim() : ลบช่องว่างก่อน
//charAt(0) : ดึงตัวอักษรตัวแรก
//toUpperCase() : แปลงตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่
//slice(1) : ตัดข้อความตั้งแต่ตำแหน่งที่ 1 จนถึงตัวสุดท้าย
//toLowerCase() : แปลงส่วนที่เหลือเป็นตัวพิมพ์เล็ก
//ตัวอักษรแรกที่แปลงเป็นตัวพิมพ์ใหญ่จะถูกรวมกับส่วนที่เหลือที่เป็นตัวพิมพ์เล็ก
console.log(username)
