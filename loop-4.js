function checkCardNumber(nstr) {
    let sum = 0;
    let nstrScratch = nstr.replace(/\D/g,'');
    for (let i = nstrScratch.length-1; i >= 0; i--) {
        let num = Number(nstrScratch[i]);
        if (!(i % 2)) {
            let temp2x = num * 2;
            while (temp2x) {
                sum += temp2x % 10;
                temp2x = Math.floor(temp2x / 10);
}
}
        else {
            sum += num;
}
}
    if (!(sum % 10)) {
        return true;
}
    else {
        return false;
}
}
module.exports = checkCardNumber;
