// Filter Function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums)

const newNum = myNums.filter((nums) => {
    return nums > 5
})
console.log(newNum)

console.log()


const books = [

{ title: 'Book .One', genre: 'Fiction', publish: 1981,
edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999,
edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009,
edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987,
edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986,
edition: 1996 },
{title: 'Book Eight', genre: 'Science', publish: 2011}

]

const newFunc = books.filter( (items) => items.genre === 'History')
console.log(newFunc)

console.log()

const myfunc = books.filter((items) => {return items.genre === 'Fiction' && items.publish >= 1986})
console.log(myfunc)

console.log()

// Map Function
const arr = [1, 2, 3, 4, 5, 6, 7]
const numb = arr.map((item) => item+2)

console.log(numb)

// Chaining in Map
const newnum = arr.map((item) => item*10).map((item) => item+5)
console.log(newnum)

const newnum2 = arr.map((item) => item*10).map((item) => item+5).filter((item) => item >= 40)
console.log(newnum2)

console.log()

//Reduce Function
const MyNums = [1, 2, 3, 4]

const myTotal = MyNums.reduce(function(acc, currval)  {
    console.log(`Acc ${acc} and curr ${currval}`);
   return acc + currval
}, 0)

console.log(myTotal)

console.log()

const myTot = MyNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTot)

console.log()


const shoppingCart = [
    {
        name:"JS Course",
        price: 2999
    },

    {
        name: "Python Course",
        price: 3999
    },

    {
        name: "Web Dev",
        price: 4999
    },

    {
        name: "Data Science", 
        price: 5999
    }

]

const netBill = shoppingCart.reduce((acc, items) => acc+items.price, 0)
console.log("your net bill is ", netBill)

