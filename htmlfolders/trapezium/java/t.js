// methord i
{
    // area of the first triangle
let base1= 10
let height1= 16
let AreaOfTriangle1= 1/2* base1 * height1

//area of the square
let Square_height=16
let  Square_base =20

let AreaOfSquare= Square_base *Square_height

// area of the first triangle
let base2= 10
let height2= 16
let AreaOfTriangle3= 1/2 * base2 * height2

let TotalArea= AreaOfSquare +AreaOfTriangle1 + AreaOfTriangle3

console.log(TotalArea)

    
document.getElementById("a").onclick=function(){

    document.getElementById("ar").innerHTML=`the area of the trapezium is ${TotalArea}`
}
}


//way 2

{

    // 1/2 * (a+b) * h
    let a ,b ,height,area
   
a=40
b=20
height=16

area= 1/2 * (a+b) * h

console.log(area)

document.getElementById("a").onclick=function(){

    document.getElementById("ar").innerHTML=`the area of the trapezium is ${area}`
}
    
}