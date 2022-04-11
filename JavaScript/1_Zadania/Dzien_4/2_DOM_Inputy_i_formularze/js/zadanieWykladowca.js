let checkEmail = document.getElementById("email");
let validMonkey = /@/;
let buttonClick2 = document.querySelector(".btn-primary");
let transferErrorMessage = document.querySelector(".error-message");
let checkName = document.getElementById("name");
let checkSurname = document.getElementById("surname");
let checkPass1 = document.getElementById("pass1");
let checkPass2 = document.getElementById("pass2");
let checkCheckBox = document.querySelector("#agree");
buttonClick2.addEventListener("click",function (event){
    if (checkEmail.value.match(validMonkey)){
    }else{
        transferErrorMessage.innerHTML = "Email musi posiadać znak @";
        event.preventDefault();
    }
    if (checkName.value.length <= 6){
        transferErrorMessage.innerHTML = "Twoje imię jest za krótkie";
        event.preventDefault();
    }
    if (checkSurname.value.length <= 6){
        transferErrorMessage.innerHTML = "Twoje nazwisko jest za krótkie";
        event.preventDefault();
    }
    if (checkPass1.value === checkPass2.value && checkPass2.value.length !== 0  && checkPass1.value.length !== 0){
    }else{
        transferErrorMessage.innerHTML = "Hasła nie są takie same lub puste";
        event.preventDefault();
    }
    if (checkCheckBox.checked === false){
        transferErrorMessage.innerHTML = "Musisz zaakceptować warunki";
        event.preventDefault();
    }
});