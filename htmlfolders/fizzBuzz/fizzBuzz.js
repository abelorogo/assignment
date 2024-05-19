/*


ASSIGNMENT ONE:
Topic: Control Structures: If statements, logical operators, Loops, functions
Write a function called fizzBuzz that takes a parameter n and prints numbers from 0 to n. 
For multiples of 3, the program should print "fizz" 
and for multiples of 6, the program should print "buzz". 
If a number is a multiple of both 3 and 6, the program should print "fizzBuzz". 
The program should print the actual number if it's not a multiple of 3 or 6. n is any positive integer.*/



{

    function  fizzBuzz (n){
        for(let i = 0; i <n; i++){

            if(i%3==0){

                console.log("fizz")
            }
            if(i%6==0){
                console.log("\n buzz")

            }
            if ((i%3==0)&&(i%6==0)){
                console.log("\n fizzBuzz")
            }
            else{
                console.log(i)
            }
        }



    }
fizzBuzz(20)
}