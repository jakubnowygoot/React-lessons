let timeout = setTimeout(function () {
    console.log('Zadziałam za 10 minut!');
}, 600000);  //funkcja zadziala za 10 minut

let interval = setInterval(function () {
    console.log('Działam co 13 minut!');
}, 780000);  //funkcja dziala co 13 minut

function countHello(n) {
    if( n<1 || n>10){
        console.log("podaj liczbe miedzy 1-10")
    } else {
        let counter = 0;
        let interval = setInterval(function () {
            counter++;
            console.log('Hello', counter);
            if (counter === n){
                clearInterval(interval);
            }
        }, 1000);
    }
}
countHello(3);
