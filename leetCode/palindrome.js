let x = -121
var isPalindrome = (() => {
let str = x.toString();
let ray = str.split("");
let rray = ray.reverse();
let rstr = rray.join("");

if (str===rstr){
    return true
}else {
    return false;
};

})


isPalindrome()