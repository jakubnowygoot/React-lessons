let x2 = 2;
let y2 = 10;

if(x2 > y2){
    console.log('liczba 1 nie może być większe od liczby 2');
} else {
    let suma = 0;
    for(let i2 = x2; i2 <= y2; i2++) { suma += i2; }
    console.log('Suma: '+suma);
}

//Suma to 54