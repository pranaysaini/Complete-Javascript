const accountId = 144534
let accountEmail = "pranay@gmail.com"
var accountPw = "3242"
accountCity = "Delhi"
let accountState
//   accountId =  2 // Not allowed

accountEmail = "prn@gmail.com"
accountPw = "098"
accountCity = "Jaipur"


// dont use var and use let

console.table([accountId, accountEmail, accountPw, accountCity, accountState])



//Data Type Conversion

let age="33"
console.log(typeof(age))

// Conversion of string to number
let value = Number(age)
console.log(typeof(value))
console.log(value)

// Other Example from number to bool
let boolValue = 1
let myBool = Boolean(boolValue)
console.log(myBool)


// Stack and Heap

// In stack changes are being done in copy and in heap 
//changes are done in original value.
let userOne = {
email: "user@google.com",
upiid: "user@ybl"
}

let userTwo = userOne

userTwo.email = "pranay@google.com"

console.log(userOne.email)
console.log(userTwo.email)

console.log("-----------------------------------------------------------")

// Strings
const gameName = new String("Pagalpan")
console.log(gameName)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf("l"))

// Slicing
console.log("Slicing")
const newString1 = gameName.substring(0, 2)
const newString2 = gameName.slice(-8, 5)

console.log(newString1)
console.log(newString2)

const newVar = "    Phantom   "
console.log(newVar)
console.log(newVar.trim())

const url = "https://pranay.com/pranay%20saini"

console.log(url.replace("%20", "-"))
console.log(url.includes("hitesh"))

const newString = "Pranay-Kumar-Saini"
console.log(newString.split("-"))

console.log("--------------------------------------")
// Number and Maths

// const maths = new Number(500)
console.log(maths)

console.log(maths.toString().length)
console.log(maths.toFixed(2))               // Putting decimals

const hund = 10000000
console.log(hund.toLocaleString('en-IN'))   // Putting Comas

console.log("Maths ------ ")

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(5.1))
console.log(Math.floor(8.9))
console.log(Math.min(1, 2, 3, 4, 5))
console.log(Math.max(1, 2, 3, 4, 5))

console.log(Math.random())
console.log((Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 