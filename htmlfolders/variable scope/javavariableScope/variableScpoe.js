/*
ASSIGNMENT 2
Topic: Functions, Variables, Scope and operators
Write a JS program to get the sum of all numbers greater than or equal to n where n is an integer
Example: if n is 5 then the sum is 1+2+3+4+5 = 15
The function should return the sum
Invoke the function
Print the output to the console.
*/


// using function
{
function VariablesScope(){
let n=7
return n*(n+1)/2

}

console.log(VariablesScope())
   
}


//using loops
{
    for(let h=1 ; h<=10; h++ ){
let u=(h*(h+1)/2)
        console.log(u)
    }
}
