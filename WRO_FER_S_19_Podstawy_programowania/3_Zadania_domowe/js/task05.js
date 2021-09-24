function isPrimeNumber(n) {
    if (n !== 2) {
        if (n < 2 || n % 2 === 0) {
            return false;
        }for (let i=3; (i*i)<=n; i+=2) {
            if (n % 2 === 0){
                return false;
            }
        }
    }return true;
}
console.log(isPrimeNumber(9))

//Wynik w konsoli to true