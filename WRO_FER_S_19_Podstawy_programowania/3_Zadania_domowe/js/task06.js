function getPi(n) {
    let result = 0;

    for (let i = 0; i < n; i++) {
        result += (1/(1+(4*i)))-(1/(3-(4*i)));
    }

    return 4 * result;
}

console.log(getPi(3))


