/* Matthias Hufnagl
 3-7-15
 section 00
 Day day 7 arguments
 */

//alert("test to see if it werks");

//argiments - goes into the function parts of the functions callsed

//add in perameters

function calcArea(w,h){
    //var width=10;
    //var height=20;
    var area = w*h;
    console.log("The Area is "+area);
}


//add arguments to the function call
calcArea(10,20);
calcArea(20,40);

var width = prompt("enter a width");

var height =prompt("enter height");

calcArea(width,height);

//dog years

function dogYears(humanAge){

    var dogAge = humanAge * 7;

    console.log("your age in dog years is "+dogAge)

}

dogYears(4)

var userInput = prompt("perlase enter your human age")

dogYears(userInput);
