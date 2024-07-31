//task5
const regex = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
const phoneNumber = "(123) 456-7890";
const match = phoneNumber.match(regex);
if (match) {
    const [, areaCode, centralOfficeCode, lineNumber] = match;
    
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
}

//task6
const regex1 = /([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
const email = "varun@gmail.com";
const match1 = email.match(regex1);
if (match1) {
    const [, username, domain] = match1;
    
    console.log("Username:", username);
    console.log("Domain:", domain);
}
