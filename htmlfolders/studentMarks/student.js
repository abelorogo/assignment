/*
ASSIGNMENT 3
Topic: Objects, operators, loops, arrays, Strings
Create a function that takes an array of a tleast 5 objects 
as its parameter. Each object is a student. The student object
 has two fields: name and marks. The name is a string -> student name. 
 The marks field is an array of 5 elements each representing the student's 
 performance in 5 subjects. Write a function that iterates through the array and gets 
 the average marks for each student. The function should print the students names and 
 their average marks in descending order. Example:
arrayOfStudents = [{name: "Stephen", marks: [45, 78, 90, 32, 67]}, 
{name: "Maryanne", marks: [89, 78, 10, 67, 47]}, {name: "Kelvin", marks: [55, 88, 94, 52, 37]}, 
{name: "Claire", marks: [44, 68, 88, 62, 77]}]
Output: Claire: 67.8
               Kelvin: 65.2
               Stephen: 62.4
               Maryanne: 58.2
Run the function with a sample array to verify the output

scores=[62,61,34,45,41]
function getSumInArray(){
    let sum = 0;
    for (let i = 0; i < scores.length; i++){
        sum = sum + scores[i]
    }
    return sum;
}


console.log(getSumInArray()/5)
*/


const students = [
    {
        name: "abel",
        score: [54, 85, 74, 25, 32, 14]
    },
    {
        name: "john",
        score: [55, 75, 94, 35, 42]
    },
    {
        name: "osoro",
        score: [65, 55, 94, 85, 92]
    },
    {
        name: "james",
        score: [66, 64, 34, 95, 91]
    },
    {
        name: "orogo",
        score: [62, 61, 34, 45, 41]
    }
];

function getSumInArrays(students) {
    for (let i = 0; i < students.length; i++) {
        let sum = 0;
        for (let j = 0; j < students[i].score.length; j++) {
            sum += students[i].score[j];
        }
        console.log(students[i].name +' '+ sum/5);
    }
}

getSumInArrays(students);
;
