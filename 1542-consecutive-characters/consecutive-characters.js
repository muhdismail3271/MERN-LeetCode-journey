/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    if(s.length === 0) return 0;
    let maxCons = 1;
    let minCons = 1;
    for(let i=1; i<s.length; i++) {
        if(s[i] === s[i-1]){
            minCons++;
            maxCons = Math.max(maxCons,minCons);
        }
        else {
            minCons = 1;
        }
    }
    return maxCons;
};