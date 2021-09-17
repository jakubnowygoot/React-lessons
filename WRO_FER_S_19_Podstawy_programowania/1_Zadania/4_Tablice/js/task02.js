
let plot = meho[Math.floor(Math.random()*myNymbers.length)];
console.log(plot)

let meho2 = [1,4,5,7,9,10,23,44,12,41];


for (i = 0; i < meho2.length; i++) {
} if (meho2 % 2 == 0 ) {
    console.log(meho2.map(v=> v+0));
}else console.log(meho2.map(v=> v+0));





let meho2 = [1,4,5,7,9,10,23,44,12,41];

let evenNumbers = meho2.filter(function(item) {
    return (item % 2 == 0);
});
console.log(evenNumbers);