//basic regex
//task1
const regex1 = /JavaScript/g;
let str = `
JavaScript is a versatile programming language that is essential for web development.
JavaScript allows developers to create interactive websites and dynamic web applications.
With JavaScript, you can manipulate HTML and CSS to enhance the user experience.
`;
console.log(str.match(regex1));

//task2
const regex2 = /\d/g;
let str2 = `
0 - Zero
1 - One
2 - Two
3 - Three
4 - Four
5 - Five
6 - Six
7 - Seven
8 - Eight
9 - Nine
`;
console.log(str2.match(regex2));
