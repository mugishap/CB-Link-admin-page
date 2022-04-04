function changeTheme() {
    let body = document.querySelector("body")
    if(body) console.log("body is defined");
    else console.log("body is not defined");
    body.style.backgroundColor = "black"
    console.log("fasdasf"); 
}
function calculatorOff() {
    container.style.display="none"
}

let calculatorBtn = document.querySelector(".calc-btn")
let container = document.querySelector(".container")
if(calculatorBtn){
    calculatorBtn.addEventListener('click',()=>{
        container.style.display="grid"
    })
}
else{
    console.log("Button is not defined");
}
