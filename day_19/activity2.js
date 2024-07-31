//task3
const regex1 = /\b[A-Z][a-zA-Z]*\b/g;
let str3 = "Orewa Kaaizoku ou ni naru Otoko da!";
console.log(str3.match(regex1));

//task4
let str = `
0 - Zero
11 - eleven
2 - Two
3 - Three
4 - Four
5 - Five
16 - Sixteen
7 - Seven
8 - Eight
9 - Nine
`;
const regex2 = /\d+/g;
console.log(str.match(regex2));