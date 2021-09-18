function whatNumber(n) {

    let per = 0;

    for(var i=1;i<=n/2;i++) {
        if(n%i === 0) {
            per += i;
        }
    }if(per === n && per !== 0) {
        console.log("doskonała");
    } else {
        console.log("niekompletna");
    }
}
console.log(whatNumber(28));


//wynik to doskonala