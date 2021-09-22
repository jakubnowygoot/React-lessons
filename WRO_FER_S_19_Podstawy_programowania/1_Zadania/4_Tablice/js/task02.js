let meho = [1,4,5,7,9,10,23,44,12,41];

let plot = meho[Math.floor(Math.random()*myNymbers.length)];
console.log(plot)





let muse = [1,2,3,4,5,6,7,8,9,10];
let one = []

for (i=0; i < muse.length; i++) {
    if (i % 2 == 0){
        one.push(muse[i])
    }


}
let myk = one.map(function(num) {return num + 1} )


console.log(myk)
