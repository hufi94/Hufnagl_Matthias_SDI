/* Matthias Hufnagl
 3-7-15
 section 00
 Day 8 multibles
 */

//alert("test to see if it werks");

// multible functions  useing info from user

//calc perimiter an area of a rectangle

function periRect(w,h){

    var p =2*w + 2*h;
    return p;


}
//anonomas function

var areaRect =function(w,h){

    var area = w*h;
    return area;

};

//prompt user

var width = prompt("lets figure ot the perimiter and area of a rectangle \n what is the width");


while(width==="" || isNaN(width)){

    width =prompt("Please dont leve blank and only use numbers \n what is you width");

}

//parsint it

width =parseInt(width);

var height =prompt("What is the height of the rectangle");

while(height===" " || isNaN(height)){

    height =prompt("Please dont leve blank only type in numbers \n what is the number");


}

height =parseInt(height);

//function calls

var resultsPeri = periRect(width, height);
var resultArea = areaRect(width, height);

//combined console

console.log("The perimiterer of your rectangle is " +resultsPeri+ " and the area " +resultArea+".")


//create a conmined function


function conbinedRect(w, h){

    var p= 2*w +2*h;
    var a = w*h;
    return [p,a];


}

//function call conpined array

var conbindResults = conbinedRect(width,height);

console.log(conbindResults);
console.log("the perimiter of your rectangle is "+conbindResults[0]+"and the are is "+conbindResults[1]+".")

