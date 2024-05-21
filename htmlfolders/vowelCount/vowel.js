/*

ASSIGNMENT TWO:
Topic: if statements, loops, functions, Strings
Write a function that takes a string as an  argument and counts the number of vowels in the String.
 Example: the string "zindua" has 3 vowels. 
 The function should return 3.*/

 {
    
    function countVowels(string ) {

        
        let vowelCount = 0;
    
        for (let i = 0; i < string.length; i++) {
          
            let char = string [i];
            
           
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
                char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        
                vowelCount += 1;
            }
        }
        
       
        return vowelCount;
    }
    
    
    const string = "welcome to zindua coding school ";
    console.log("The number of vowels in" +string+ " is " + countVowels(string));
    
 }


 function v(words){
    words=words.toLowerCase()
c=0
let vowel= "aeiou"
for (let y=0 ; y<words.length; y++){
if (vowel.includes(words[y])){
c++
}


}

return c;
 }

 console.log(v("hello wold"))