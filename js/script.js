// js
function textchange(){
    document.getElementById('ct').innerHTML="Hello World!";
}

function showdate(){
    document.getElementById('sd').innerHTML=Date();
}

function showtext(){
    document.getElementById('st').innerHTML="Hellow World";
}


function bulbon(){
    document.getElementById('b_img').src="img/on.gif";
}

function bulboff(){
    document.getElementById('b_img').src="img/off.gif";
}

function changestyle(){
    document.getElementById('cs').style.fontSize="40px";
}

function hidetext(){
    document.getElementById('ht').style.display="none";
}

function solvemath(){
    document.getElementById('sm').innerHTML=5+6;
}

function showpop(){
    alert(7+3);
}

// function print(){
//     .print();
// }

// ex10 
// function showmath(){
//     document.getElementById('ma').innerHTML=4+7 ;
// }

let a, b, c;
a = 5;
b = 7;
c = a + b;
document.getElementById('ma').innerHTML = c;
// ex11 
document.getElementById('ev').innerHTML= 5*10;

// ex12 
var x;
x = 5;
document.getElementById('jv').innerHTML= x*11;

// ex13 
var x, y;
x = 5 + 6;
y = x *10;
document.getElementById('vv').innerHTML = y;

// ex14 
var x, y;
x = 5;
y = x + 2;
document.getElementById('jc').innerHTML = y;

// ex15
var x, y, z;
x = 5;
y = 6;
z = x + y;
document.getElementById('exv').innerHTML = "The value of z is: " +z;

// ex16
var x = "john" + "" +" Doe";
document.getElementById('jd').innerHTML = x;

// ex17
var x = "5" + 2 + 3;
document.getElementById('re').innerHTML = x;

// ex18
var x = + 2 + 3 + "5";
document.getElementById('ra').innerHTML = x;

// ex19
var $$$ = 2;
var $mymoney = 5;
document.getElementById('do').innerHTML= $$$ + $mymoney;

// ex20
var x = 2;
// Now x is 2
var x = 3;
// Now x is 3
document.getElementById('rv').innerHTML = x;

// ex21
var x = 2; 
{
   var x = 3; 
}
{
   var x = 4; 
}
document.getElementById('bk').innerHTML = x;

// ex22
let text1 = "A";
let text2 = "B";
let result = text1 < text2 ;
document.getElementById("all").innerHTML = "Is A less than B? "  +  result ;

// ex23
let text3 = "20";
let text4 = "5";
let answer  = text3 < text4;
document.getElementById('jo').innerHTML = answer ;

// ex24
var x = 5+5;
var y = "5" + 5;
var z = "Hello" + 5;
document.getElementById('to').innerHTML = x + "<br>" + y + "<br>" + z; 

// ex25
// let x = 5;
// let y = 5;
// let z = 6;
// document.getElementById('tf').innerHTML = (x == y) + "br" + (x == z);