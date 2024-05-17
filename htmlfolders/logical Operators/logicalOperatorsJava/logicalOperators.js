{

    /*
    
    
   Topic: If statements and logical Operators:

Create program to check the best fitting course for a student based on 7 subjects:

Maths, English, Chemistry, Physics, Kiswahili, History, Geography
Points to Note:
Languages include Kiswahili and English
Humanities include History and Geography
A student can either pass or fail a subject
The following are the requirements for the assignments:
Compute Science: Pass maths, one of the languages and either Physics or Chemistry
Journalism: Pass maths, english, kiswahili and one of the humanities
Engineering: Pass maths, one of the languages, one humanity and either physics or Chemistry
Medicine: Pass maths, one of the languages, chemistry and one of the humanities
If someone passes all the subjects, the output should be, "You can choose a course of your choice"
Should tell a student when he or she has not qualified for any of the courses 
    
    */
let Maths, English, Chemistry, Physics, Kiswahili, History, Geography

English="pass"
Maths="fail"
Chemistry="pass"
Physics="fail"
Kiswahili="pass"
History="pass"
Geography="fail"

if((Maths=="pass") && (English="pass" )&& (Chemistry=="pass") && (Physics=="pass")  &&  (Kiswahili=="pass" )&& (History=="pass" )&&(Geography=="pass" ) ){

    console.log("congradulations! You can choose a course of your choice" )
}
else if((Maths=="pass") ||    ((Kiswahili=="pass" )||(English="pass" ))     &&   ((Physics=="pass") ||(Chemistry=="pass") )   ){
console.log("congradulation!  you qualify for computer science")
}
else if(/*REQUIRED */  ((Maths=="pass") && (English="pass" )&&(Kiswahili=="pass" )  /* OPTIONAL HUMANITIES */ &&((History=="pass" )||(Geography=="pass" ))  )){
    console.log("congradulation! you qualify for Journalism")
}

else if((Maths=="pass") /*REQUIRED one of the languages */ && (((Kiswahili=="pass" )||(English="pass" )) &&  /*REQUIRED one of the HUMANITIES*/((History=="pass" )||(Geography=="pass" )) ) &&((Physics=="pass") ||(Chemistry=="pass") )){

    console.log("congradulation!  you qualify for Engineering")
}

else if((Maths=="pass")  &&   (  (Kiswahili=="pass" )||(English="pass" )  )   &&  (  (Kiswahili=="pass" )||(English="pass" )    && (Chemistry=="pass") &&  ((History=="pass" )||(Geography=="pass" ))   )      ){
    console.log("congradulation! you qualify for MEDICINE")
}
else{

    console.log("sorry , you failed , you need to opt for other career choices ")
}


}