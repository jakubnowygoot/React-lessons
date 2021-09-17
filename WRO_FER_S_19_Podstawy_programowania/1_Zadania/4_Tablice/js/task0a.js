const myNymbers = [1,2,6,4,7,6,7,8,1,10];

let randomNumer = myNymbers[Math.floor(Math.random()*myNymbers.length)];
const duplicateCount = (a) => a.length - new Set(a).size;

console.log(randomNumer);
console.log(duplicateCount(myNymbers));



//wynik to losowa liczba
//kolejnym wynikiem jest liczba 3 czyli liczba powtarzajacych sie elementow  w tablicy