//task 7
let year = 2004;
if(year%4==0){
    if(year%100==0 && !(year%400==0))
        console.log("not a leap year");
    else
        console.log("leap year");
}
else
    console.log("not a leap year.");
