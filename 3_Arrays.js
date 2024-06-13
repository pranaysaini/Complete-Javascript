// Arrays
const arr = [0, 1, 2, 3, 4, 5]
const hero = ["shaktiman", "thanos", "phantomcat"]

const myArr1 = new Array(1, 2, 3, 4, 5)
//console.log(myArr1[2])

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr)

myArr.push(6)
console.log(myArr)

myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))


const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

const myArr2 = [1, 2, 3, 4, 5]
console.log(myArr1)

console.log("\n")

console.log("A", myArr2)
console.log(myArr2.slice(1, 4))


// Splicing
console.log("B", myArr2)
console.log(myArr2.splice(1, 4))

console.log("Spliced Array --- ", myArr2)

console.log("----------------------------------------------------")

const marvel_heros = ["thor", "spiderman", "batman"]
const new_heros = ["superman", "thanos", "ironman"]

const all_heros = [...marvel_heros, ...new_heros]   // New array will be merged as unique elements
console.log(all_heros)

// Convert string to array
console.log(Array.from("Pranay"))
console.log(Array.from({name:"Pranay"}))  // Imp.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))