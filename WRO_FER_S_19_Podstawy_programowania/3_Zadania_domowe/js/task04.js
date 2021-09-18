function getFibonacciNumbers(n) {
    a = 0, b = 1;
    console.log([a+", "]);
    for (i=0; i < n; i++)
    {
        console.log([b+", "]);
        b = b+a;
        a = b-a;
    }
}
console.log(getFibonacciNumbers([9]))
