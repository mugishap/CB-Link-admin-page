
function calculatorOff() {
    container.style.display = "none"
}

let calculatorBtn = document.querySelector(".calc-btn")
let container = document.querySelector(".container")
if (calculatorBtn) {
    calculatorBtn.addEventListener('click', () => {
        container.style.display = "grid"
    })
}
else {
    console.log("Button is not defined");
}
function showNav() {
    let icon = document.querySelector(".menu")
    let list = document.querySelector(".on-small-screen")
    if (list.style.display == "flex") {
        list.style.display = "none"
        icon.innerHTML = "menu"
    }
    else {
        list.style.display = "flex"
        icon.innerHTML = "close"
    }

}
if (document.documentElement.clientHeight == 693) {

}
//FETCH FROM BACKEND BELOW HERE
