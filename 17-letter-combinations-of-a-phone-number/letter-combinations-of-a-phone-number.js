/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const combos = [
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
        ];


        if(!digits) return [];

        let arr = [''];

        for(let digit of digits){
        let letters = combos[digit - 2];
        let newArr = [];
        
        for(let combo of arr){
            for(let letter of letters){
            newArr.push(combo + letter)
            }
        }
        arr = newArr
        }
        return arr;
};