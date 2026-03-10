/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let arr=[];
    for(let i=0; i<sentences.length; i++){
        let n = sentences[i].split(` `);
        arr.push(n.length);
    }
    return Math.max(...arr);
};