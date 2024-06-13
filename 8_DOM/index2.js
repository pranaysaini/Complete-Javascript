const nameNode = document.createElement("h1")
nameNode.id = "name"

const bodyRef = document.querySelector('body')
bodyRef.prepend(nameNode)
console.log(nameNode)


const newEle = document.createElement('h1')
newEle.id = "name"

const myBody = document.querySelector("h1")
myBody.prepend(newEle)

const my2 = document.getElementsByTagName("ul");
console.log(my2);

const myr = document.getElementsByClassName(".description");
console.log(my1);

const my = document.getElementById("name");
console.log(my);

const mera = document.querySelector(".description")
console.log(mera)

const mera2 = document.querySelectorAll("ul li")
console.log(mera2)

console.log(document.querySelector('ul li').textContent)   //To fetch content of a tag

console.log(my1.classList) // TO Fetch all classes of element 

my1.classList.add("bold")  //Add and remove class
my1.classList.remove('bold')

my1.style.fontSize = '30px'
my1.style.color = 'red'



