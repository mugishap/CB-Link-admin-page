function changeTheme(e) {
    localStorage.setItem("mode", "light")
    let body = document.querySelector("body")
    let credentials = document.querySelector(".credentials")
    body.classList.toggle("body-dark-mode")

}
