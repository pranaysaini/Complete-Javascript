// Call Back Function

let calc = (a, b) => {
    return a+b;
}

let state = (free, oper) => {
    console.log(free);
    return oper;
}

let temp = calc(5, 2);
let res = "Result is : ";
let ans = state(res, temp);

console.log(ans);

// Other Call Back Functions
let a = [1, 2, 3, 4, 5];

let newFunc = (num) => {
    return num > 3;
}

let Result = a.find(newFunc);
console.log(Result);


// Set Timeout
console.log("Hello Buddy Whats up");

let getFunc = () => {
    console.log("this will be executed later");
}

setTimeout(getFunc, 1000);

console.log("Executed");
console.log("Again Executed");


// Call Back Hell
function makeCheese(callBack){
    setTimeout(() => {
        let cheese = '🧀';
        console.log("Here is Cheese : ", cheese);
        callBack(cheese);
    }, 10000);
}


function makeDough(cheese, callBack){
    setTimeout(() => {
        let dough = cheese + '🫓';
        console.log("Here is dough : ", dough);
        callBack(dough);
    }, 10000);
}

function makePizza(dough, callBack){
    setTimeout(() => {
        let pizza = dough + '🍕';
        console.log("Here is pizza : ", pizza);
        callBack(pizza);
    }, 10000);
}

makeCheese((cheese) => {
    makeDough(cheese, (dough) => {
        makePizza(dough, (pizza) => {
            console.log("Here is your Pizza : ", pizza);
        } )
    })
})
