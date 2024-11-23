// switch = can be an efficient replacement to many else if statements

let day = 1;

switch(day){
    case 1 :
        console.log("mon");
        break
    case 2 :
        console.log("tue");
        break
    case 3 :
        console.log("wed");
        break
    case 4 :
        console.log("thu");
        break
    case 5 :
        console.log("fri");
        break
    case 6 :
        console.log("sat");
        break
    case 7 :
        console.log("sun");
        break
    default :
        console.log(`the ${day} is not a number or case only limit up to 7 cases`)
}
