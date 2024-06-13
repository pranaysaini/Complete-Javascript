// let fHeading = document.createElement('h1');
// fHeading.textContent = "My Name is Pranay Saini";

// let bodyTag = document.querySelector('body');

// let newTag = bodyTag.appendChild(fHeading);

// console.log(newTag);

let myDiv = document.querySelector('#myDiv');

let NewEle = document.createElement('span');
NewEle.textContent("Free Fire");

myDiv.insertAdjacentElement('beforebegin', NewEle);
myDiv.insertAdjacentElement('afterbegin', NewEle);
myDiv.insertAdjacentElement('beforeend', NewEle);
myDiv.insertAdjacentElement('afterend', NewEle);


let parent = document.querySelector("#myDiv");
let child = document.querySelector('#fpara');

parent.removeChild(child);

