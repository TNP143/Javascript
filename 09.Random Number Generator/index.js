// // random generator

// let ramdomNum1 = Math.random();
// console.log(ramdomNum1)
//สุ่มเลข0-1

// let ramdomNum2 = Math.floor(Math.random() * 6) + 1;
// console.log(ramdomNum2)
//สุ่มเลข0-5.99,ปัดทศนิยมลง,+1=เลื่อน0-5เป็น1-6

// const min = 50;
// const max = 100;
// let ramdomNum3 = Math.floor(Math.random() * (max - min)) + min;
// console.log(ramdomNum3)
//Math.random() * 50 =ได้เลขระหว่าง0-49.99
//+ min = เลื่อนตัวเลขเข้าสู่ช่วงที่ต้องการ  

const mybtn = document.getElementById("mybtn");
const container = document.getElementById("container");
const min1 = 1;
const max1 = 6;
let randomNum4;


mybtn.onclick = function() {
    randomNum4 = Math.floor(Math.random() * max1 ) + min1;
    //สุ่มเขระหว่าง1-6
    container.textContent = randomNum4;
}
