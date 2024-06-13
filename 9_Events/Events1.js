let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    // console.log("This Message is important");
    // let a = 24;
    // a++;
    // console.log(a);

    console.log(evt);
    console.log(evt.target)
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY)
};







let myHover = document.querySelector("div");

myHover.onmousehover = () => {
    console.log("Inside Div");
}



let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    console.log("This is Handler 1");
});

btn2.addEventListener("click", () => {
    console.log("This is Handler 2");
});

const handler = () => {
    console.log("This is Handler 2")
}
btn2.addEventListener("click", handler);

btn2.addEventListener("click", () => {
    console.log("This is Handler 4")
});

btn2.removeEventListener("click", handler)
