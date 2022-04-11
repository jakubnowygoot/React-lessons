let checkVisa = /^4[0-9]{12,15}$/;
let checkMasterCard =/^5[0-9]{15}$/;
let checkAmericanExpress = /^(?:3[47][0-9]{13})$/;
let checkCard = document.getElementById("name");
let changeColor = document.querySelector(".form-control");
let cardName = document.getElementById("type");
function findCard(){
    if (checkCard.value.match(checkAmericanExpress)){
        changeColor.style.borderColor = "limegreen"
        cardName.innerText = "American Express"
    }else if(checkCard.value.match(checkMasterCard)){
        changeColor.style.borderColor = "limegreen"
        cardName.innerText = "Mastercard"
    }else if(checkCard.value.match(checkVisa)){
        changeColor.style.borderColor = "limegreen"
        cardName.innerText = "Visa"
    }else{
        changeColor.style.borderColor = "red"
        cardName.innerText = ""
    }
};

