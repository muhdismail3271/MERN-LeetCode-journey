/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;
    let p=1;
    let q=2;
    for(let i=3; i<=n; i++){
        let temp = p+q;
        p=q;
        q=temp
    }
    return q;
};