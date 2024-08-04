//group anagrams
function groupAnagram(arr){
    const group = {};
    arr.forEach(str => {
        sortedstr = str.split("").sort().join("");
        if(group[sortedstr])
            group[sortedstr].push(str);
        else
            group[sortedstr] = [str];
    });
    return Object.values(group);
}
console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagram([""]));
console.log(groupAnagram(["a"]));