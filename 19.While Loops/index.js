// while loop = repeat some code While some of condition is true

// let username = "";

// while(username === ""){
//     console.log(`you didnt enter youre name `);
// }


// DO NOT MAKE IT TRUE LAG !
// console.log(`hello ${username}`);

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt(`enter your name : `);
// }

// or use

// let username;

// do{
//     username = window.prompt(`enter your name : `);
// }while(username === "" || username === null)


// console.log(`hello ${username}`);

let loggedin = false;  // กำหนดสถานะเริ่มต้นให้ยังไม่ล็อกอิน
let username;          // ประกาศตัวแปรสำหรับเก็บชื่อผู้ใช้
let password;          // ประกาศตัวแปรสำหรับเก็บรหัสผ่าน

while (!loggedin) {  // ทำซ้ำจนกว่าจะล็อกอินสำเร็จ (loggedin เป็น true)
    username = window.prompt("กรุณากรอกชื่อผู้ใช้:");  // รับชื่อผู้ใช้จากผู้ใช้
    password = window.prompt("กรุณากรอกรหัสผ่าน:");    // รับรหัสผ่านจากผู้ใช้

    if (username === "myUsername" && password === "mypassword") {  // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        loggedin = true;  // ถ้าถูกต้อง เปลี่ยนสถานะเป็นล็อกอินสำเร็จ
        console.log("คุณล็อกอินสำเร็จ!");  // แสดงข้อความล็อกอินสำเร็จ
    } else {
        console.log("ข้อมูลไม่ถูกต้อง! โปรดลองอีกครั้ง");  // ถ้าข้อมูลผิด แสดงข้อความให้ลองใหม่
    }
}
