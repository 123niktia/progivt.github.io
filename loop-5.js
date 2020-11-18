function expDiff(x) {
let exp = 0;
let taylorNext = 1;
let i = 1;
    while (Math.abs(taylorNext) >= 0.0001) {
        exp += taylorNext;
        let factTemp = 1;
        //123
        for (let ifct = 2; ifct <= i; ifct++) {
             factTemp = factTemp * ifct;
}
        taylorNext = (x ** i) / factTemp;
        i++;
}
    let expDiff = Math.abs(Math.exp(x) - exp);
    console.log(expDiff);
    return expDiff;
}
module.exports = expDiff;
