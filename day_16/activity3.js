//task 5
function reverse(str){
    if(str== "")
        return ""
    return reverse(str.slice(1)) + str[0];

}
console.log(reverse("hahahahahaha"));
console.log(reverse("yagami"));
console.log(reverse("infinity"));


//task 6
function pallindrome(str){
    if(str=="")
        return ""
    let rev = reverse(str.slice(1)) + str[0];
    if(rev == str)
        return true;
    else
        return false;

}
console.log(pallindrome("wooooow"));
console.log(pallindrome("recursion"));
console.log(pallindrome("level"));