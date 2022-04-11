let buttonOne = document.getElementById("button1");
let oneNumber3Buttons = document.querySelector("span");
let myNumber = 0;
buttonOne.addEventListener("click", function (event) {
    myNumber++;
    oneNumber3Buttons.textContent = myNumber;
} );
let buttonOne2 = document.getElementById("button2");
let oneNumber3Buttons2 = document.querySelector("span");
buttonOne2.addEventListener("click", function (event) {
    myNumber++;
    oneNumber3Buttons2.textContent = myNumber;
} );
let buttonOne3 = document.getElementById("button3");
let oneNumber3Buttons3 = document.querySelector("span");
buttonOne3.addEventListener("click", function (event) {
    myNumber++;
    oneNumber3Buttons3.textContent = myNumber;
} );