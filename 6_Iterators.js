const greetings = "Pranay Saini"
for(const greet of greetings){
    console.log(`Character is ${greet}`)
}

console.log()

// in Maps
const map = new Map()
map.set("In", "India")
map.set("USA", "America")
map.set("Fr", "France")
map.set("In", "India")

console.log(map)
console.log()

for(const [key, value] of map){
    console.log(key, " ==> ", value);
}

console.log()

const newUser = {
    name: 'Pranay', 
    id:34, 
    lastName: "Saini"
}

for (const key in newUser){
    console.log(`${key}, has value ${newUser[key]}`);
}

console.log()

const places = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Jaipur"]
for(const key in places){
    console.log(`${places[key]}`);
}

console.log()

const coding = ["C++", "Python", "Ruby", "C#", "Chicken"]
coding.forEach(function (item){
    console.log(item);
})

console.log()

// const names = ["Nishant", "Sushant", "Prashant"]
// names.newNames((name) => {
//     console.log(name);
// })

function print(items){
    console.log(items);
}

coding.forEach(print);