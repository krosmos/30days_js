//task9
const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/;
let password = "Kaizokuu_123";
let password2 = "wakaranaiU_U";
console.log(regex.test(password));
console.log(regex.test(password2));

//task10
const regex1 = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
let url1 = "https://www.google.com";
let url2 = "www.google.com";
let url3 = "google.com";
let url4 = "./haggu.isnot.URL";
console.log(regex1.test(url1));
console.log(regex1.test(url2));
console.log(regex1.test(url3));
console.log(regex1.test(url4));
