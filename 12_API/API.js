const URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL)
console.log(promise);

const factPara = document.querySelector("#para") 
const btn = document.querySelector("#btn")

const getFacts = async() => {
    console.log("getting data ...... ");
    let response = await fetch(URL)
    console.log(response)

    let data = await response.json()
    
    factPara.innerText = data[0].text
}

getFacts()
btn.addEventListener(click, getFacts)