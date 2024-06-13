// Making Objects

const mySym = Symbol("key1")

const JsUser = {
    name: "Pranay",
    age: 22,
    [mySym]: "saini",
    location: "Delhi", 
    email: "pranay@gmail.com",
    isLoggedin: false,
    lsatLoginDays: ["Monday", "Saturday"],
}

console.log(JsUser.email)
console.log(JsUser["email"])

// Accessing Symbols
console.log(JsUser[mySym])

JsUser.email = "pranay@antier.com"
console.log(JsUser.email)
//Object.freeze(JsUser)                  
JsUser.email = "pranay@microsoft.com"
console.log(JsUser.email)

//Functions
JsUser.greetings = function(){
    console.log("Hello JS User");
}

JsUser.greetings2 = function(){
    console.log(`Hi my User,  ${this.name}`);     // These are back ticks(``)
}

console.log(JsUser.greetings())
console.log(JsUser.greetings2())


// Merging arrays
const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
const obj3 = {7:"g", 8:"h", 9:"i"}

const obj4 = {...obj1,...obj2, ...obj3}          // Spread Method
console.log(obj4)
   

const bumbleUser = {
    name: "Rajat",
    isLoggedIn: true,
    email: "rajat@openai.com",
}

console.log(bumbleUser)
console.log(Object.keys(bumbleUser))
console.log(Object.values(bumbleUser))
console.log(Object.entries(bumbleUser))

console.log(Object.hasOwnProperty('isLoggedIn'))



console.log("---------------------------------")
//De-structuring of objects
const course = {
    name: "Javascript",
    rate: 999,
    inst: "figma"
}

const {name} = course
console.log(name)


