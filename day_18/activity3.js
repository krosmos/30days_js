//string algos

const { max } = require("lodash");

//task6
let charCount = {};
let str = "abcccdabbdc";
for(let i = 0; i < str.length; i++){
    if(!charCount[str[i]])
        charCount[str[i]] = 0;
    charCount[str[i]]++;
}
console.log(charCount);

//task7
function longestSubStr(str){
    let maxlen = 0,currChar;
    const lastOccur = {};
    let wStart = 0, wEnd;
    for(wEnd = 0;wEnd < str.length; wEnd++){
        currChar = str[wEnd];
        if(lastOccur[currChar] >= wStart){
            wStart = lastOccur[currChar] + 1;
        }
        lastOccur[currChar] = wEnd;
        let strlen = wEnd - wStart + 1;
        if(strlen > maxlen)
            maxlen = strlen;
    }
    return maxlen;
}
console.log(longestSubStr("doctordoom"));