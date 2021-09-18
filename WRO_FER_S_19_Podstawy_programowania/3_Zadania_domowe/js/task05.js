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
console.log(isPrimeNumber(10))






function isPrimeNumber(n){
    let num;
    for (num = 0; num < 101; num++){


        if (num % 2 === 0){
            return false;

        }
        else if (num % 3 === 0){
            return false;

        }
        else if (num % 4=== 0){
            return false;

        }
        else if (num % 5 === 0){
            return false;

        }
        else if (num % 6 === 0){
            return false;

        }
        else if (num % 7 === 0){
            return false;

        }
        else if (num % 8 === 0){
            return false;

        }
        else if (num % 9 === 0){
            return false;

        }
        else if (num % 10 === 0){
            return false;

        }
        else if (num % 11 === 0){
            return false;

        }
        else if (num % 12 === 0){
            return false;

        }
        else if (num % num === 0 ) {
            return true;
        } else {
            return true;
        }
    }
};
console.log(isPrimeNumber(9));