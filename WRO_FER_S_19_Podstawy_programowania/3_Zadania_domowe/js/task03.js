function getEvenSum(n){
    let suma = 0;

    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            suma = suma + i;
        }

    }
    return suma;
}
console.log(getEvenSum(10));


//Wynik to 30
