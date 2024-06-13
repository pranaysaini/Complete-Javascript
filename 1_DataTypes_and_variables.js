// Variables

// Var

console.log("---------var----------");
var a = 10;
console.log(a);

if(true){
    var b = 20;
    console.log(b);

    // console.log(a);    It will give error coz it var variable can't be accessed out of scope
}

var flag = 82;
var flag = 90;  // Redeclaration can be done but it is a bad practice
console.log(flag);

flag = 100;
console.log(flag);  // Redefination can also be done

// var is not noramlly used


// let 

console.log("---------let------------")
let den = 45;
console.log(den);

{
    let fire = 23;
    console.log(fire);

    // console.log(den);  It will give error
}

let sam = 345;
// let sam = 12;  It will give error coz Redeclaration is not possible eith let

sam = 2315;   // Redifination is possible
console.log(sam);   





// const
console.log("-----------const------------");

const buddy = 345;
console.log(buddy);

{
    const happy = 976;
    console.log(happy);

    // console.log(buddy);   // It will give error
}

const sensex = 74892;
// const sensex = 71254;
// sensex = 758412;

// Redeclaration and redefination both are not possible

console.log(sensex);



