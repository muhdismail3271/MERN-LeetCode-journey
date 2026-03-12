/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i=0; i<s.length; i++){
        s.unshift(s[i]);
        s.splice(i+1,1);
    }
};