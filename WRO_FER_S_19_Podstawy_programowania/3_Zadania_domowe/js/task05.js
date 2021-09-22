/*function isPrimeNumber(n) {
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
console.log(isPrimeNumber(10))*/


let array = [];
function isPrimeNumber(n){
    for(let num = 0; num <= n; num++){
        if(n%num === 0){
            array.push(num);
            return true
        }else{
            return false
        }
    }
}
let result = isPrimeNumber(9);
console.log(array, result);