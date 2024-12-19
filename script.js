const numElement = document.getElementById("number");

const addBtn = document.querySelector(".add-btn");

const subBtn = document.querySelector(".sub-btn");

const resetBtn = document.querySelector(".reset-btn")

let num = Number(numElement.textContent);

addBtn.addEventListener("click",add);

resetBtn.addEventListener("click",reset);

subBtn.addEventListener("click", subtract);

reset

function add() {
    num += 1;
    numElement.textContent = num;
    numElement.style.color = "green";
    
}

function subtract() {
    num -= 1;
    numElement.textContent= num;
    numElement.style.color = "red";
}

function reset (){
    num = 0;
    numElement.textContent = num;
}