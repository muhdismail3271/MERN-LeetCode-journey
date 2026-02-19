/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let org = Math.abs(x);
    while(org){
        let ld = org % 10;
        reversed = reversed * 10 + ld;
        org = Math.floor(org/10);
    }
    if(reversed > Math.pow(2,31)-1 && reversed > Math.pow(-2,31)){
        return 0;
    }else{
        return x < 0 ? -reversed : reversed;
    }
    
};