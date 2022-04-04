const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.calc-btn');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        }else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = "The input can't be empty!";
            setTimeout(() => (display.innerText = ''), 2000);
        }else {
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.dark');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}