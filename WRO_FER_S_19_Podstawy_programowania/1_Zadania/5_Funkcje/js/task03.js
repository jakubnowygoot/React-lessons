function calculateTip(amount, raiting){
    if(raiting == "Bardzo dobra obsługa") {
        console.log(amount * 0.25);
    } else if (raiting == "Dobra obsługa"){
        console.log(amount * 0.20);
    }else if (raiting == "Średnia obsługa"){
        console.log(amount * 0.15);
    }else if (raiting == "Zła obsługa"){
        console.log(amount * 0);
    }else console.log("Opis nieczytelny");

}
console.log(calculateTip(140,"Dobra obsługa"));


//wynik napiwku to 28