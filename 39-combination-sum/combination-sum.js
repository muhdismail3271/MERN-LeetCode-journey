/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    const getCandidates = (st, rem, path) => {
        if (rem === 0) {
            result.push([...path]);
            return;
        }
        if (rem < 0 || st === candidates.length) return;
        
        for (let i = st; i < candidates.length; i++) {
            path.push(candidates[i]);
            getCandidates(i, rem - candidates[i], path);
            path.pop();
        }
    };
    
    getCandidates(0, target, []);
    return result;
};