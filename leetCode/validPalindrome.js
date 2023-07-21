
let s = "A man, a plan, a canal: Panama"

const isPalindrome = ((string) => {
   let newStr = string.replace(/[^a-z0-9]/gi,'').toLowerCase();
   return newStr.split('').reverse().join('') === newStr

});

console.log(isPalindrome(s))