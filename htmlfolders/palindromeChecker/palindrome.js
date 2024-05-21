
// 1

/*
{
    function isPalindrome(str) {

str = str.toLowerCase();
let reversedStr = str.split('').reverse().join('');
return str === reversedStr;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));   
}


*/



/// 2
{

    function Palindrome(sentence) {
       
      sentence = sentence .toLowerCase();
      sentence.split('')
      
       
        let left = 0;
        let right =  sentence .length - 1;
      
       
        while (  right>left) {
          if ( sentence [left] !== sentence[right]) {
            return false;
          }
          left++;
          right--;
        }
      
        return true; 
      }
      
     
      console.log(Palindrome("mum")); 
      console.log(Palindrome("hello"));   
      
}