/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let x = dividend/divisor;
    if(x>Math.pow(2,31)-1)return x-1;
    if(dividend/divisor<1 && dividend/divisor>0)return 0;
    return (x<0)?Math.ceil(x):Math.floor(x);
};