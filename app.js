const number = document.getElementById("number");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let counter = 0;

increaseBtn.addEventListener("click", function(){
    counter += 1;
    number.textContent = counter;
    number.classList.add(".outline")
})

decreaseBtn.addEventListener("click", function(){
    counter -= 1;
    number.textContent = counter;
})

resetBtn.addEventListener("click", function(){
    counter = 0;
    number.textContent = counter;
})