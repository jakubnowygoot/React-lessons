let liczba = prompt("Wpisz liczbę od 1 - 10 i sprawdź czy uda ci sie wygrać");
let min = 1;
let max = 10;

if ( liczba == Math.floor(Math.random() * (max - min + 1) + min)){
    console.log("Brawo!");
} else console.log ("Spróbuj jeszcze raz !");


//Miałem wpisywac w komentarzach wyniki ale nwm jak to opisac wiec powiem ze wszytsko dziala
