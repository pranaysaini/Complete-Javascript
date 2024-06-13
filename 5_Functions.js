function sayname(){
    console.log("Nony Sigh");
}

sayname();

function myname(){
    for(let i=0 ; i<=5 ; i++){
        console.log(i);
    }
}

myname();

function yourName(n){
    console.log("The Number is ", n);
}

yourName(8);

function newName(num1, num2){
    let ans = (num1+num2)/2;
    return ans;
}

let name = newName(5, 9);
console.log("Average of 5 and 9 is ", name);

let sayMyName = function(x){
    console.log("Your name ", x);
}

sayMyName(5);


let makeFunction = (num1, num2) => {
    let avg = (num1+num2)/2;
    return avg;
}

let ans = makeFunction(4, 6);
console.log("Average of the Numbers is ", ans);



function addition1(num1, num2){
    let a = num1 + num2
    return a
}
const myResult = addition1(3, 5)
console.log("Result : ", myResult)


function printMessage(name = 0){
    if(name === undefined){
        console.log("Please Enter a Valid User name")
        return  
    }
        return `Logged in By: ${name}`
         

}
console.log(printMessage("Pranay"))


// Rest Operator
function calculate(...num){
    return num
}
console.log(calculate(100, 200, 300, 400))


function calculate2(val1, val2, ...number){
    return number
}
console.log(calculate2(100, 200, 300, 400))


// passing objects in function
const user = {
    name: "Pranay",
    age: "34"
}

function handleObjects(anyobject){
    console.log(`Usernamae is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObjects(user)

// Arrays in function

const arr = [1, 2, 3, 4, 5]
function myArrays(getArrays){
    return getArrays[2]
}

console.log(myArrays(arr))

// More Functions Operations
function one(){
    const username = "pranay"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    //console.log(website)

    two()
}

one()


if(true){
    const name = "Pranay"

    if(name === "Pranay"){
        const website = "   Youtube"
        console.log(name + website)
    }

    //console.log(website)
}
// console.log(name)

// Other method to make functions
const addTwo = function(num){
    return num + 1
}

console.log(addTwo(6))

console.log("-------------------------------------")
// This keyword and arraw function

const newUser = {
    name1: "Tony Stark",
    code: 23,

    printing: function(){
        console.log(`${this.name1}, the tangent`)
    }
}
newUser.printing()
newUser.name1 = "Thanos"   // Changed the value of object
newUser.printing()

const add2 = (num1, num2) => (num1 + num2)
console.log(add2(3, 2))

const addition = () => ({userName: "Pranay"})
console.log(addition())

console.log("----------------------------")


// Immediately Invoked Function and expression(IIFE)
(function bhai(){
    console.log(`Printing New Function`);
})();

((name) => {
    console.log(`New Method of Printing Function, ${name}`);
})(`Pranay`);





