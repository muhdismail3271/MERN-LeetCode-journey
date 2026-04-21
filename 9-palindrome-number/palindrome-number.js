/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // if(x<0) return false;

    let y = Math.abs(x)
    let checkPal = 0;
    while(y) {
        let rev = y % 10;
        checkPal = checkPal * 10 + rev;
        y = Math.floor(y/10);
    }

    return x === checkPal ? true : false;
};