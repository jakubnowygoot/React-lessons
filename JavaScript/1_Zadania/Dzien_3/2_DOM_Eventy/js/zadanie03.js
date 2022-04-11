let countClick = document.getElementById("button1");
let changeNumber = document.querySelector("span:first-child");
let counting = 0;
countClick.addEventListener("click", function (event) {
    counting++;
    changeNumber.textContent = counting;
} );
let countClickButton2 = document.getElementById("button2");
let changeNumber2 = document.querySelector("p:nth-child(4) span");
let counting2 = 0;
countClickButton2.addEventListener("click", function (event) {
    counting2++;
    changeNumber2.textContent = counting2;
} );
let countClickButton3 = document.getElementById("button3");
let changeNumber3 = document.querySelector("p:nth-child(6) span");
let counting3 = 0;
countClickButton3.addEventListener("click", function (event) {
    counting3++;
    changeNumber3.textContent = counting3;

} );