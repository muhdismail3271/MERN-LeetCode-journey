/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(` `);
    let newArr = []
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i].split(``).slice().reverse().join(``));
        newArr.push(` `);
    }
    return newArr.join(``).trim();
};