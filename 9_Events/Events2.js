function change (){
    let fpara = document.querySelector("#fpara");
    fpara.textContent = "Pranay Saini";
}

let fpara = document.querySelector("#fpara");
fpara.addEventListener('click', change);

// fpara.removeEventListener('click', change);    Remove event listener


// For Dark Theme
function theme(){
    let ch = document.querySelector('body');
    ch.style.backgroundColor = 'black';

    let fparas = document.querySelector('p');
    fparas.style.color='white';

}

let btn = document.querySelector('button');
btn.addEventListener('click', theme);

function alertPara(event){
    alert("You have clicked on para ", event.target.textContent);
}
let myDiv = document.selectElementById('wrapper');
document.addEventListener('click', alertPara);
