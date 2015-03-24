/* Matthias Hufnagl
 3-7-15
 section 00
 Functions_worksheet
 */

//alert("test to see if it werks");
var radius = 1;
var weight = 20;


//Circumference

function radiusOfCircle(r){

    var circumference = 2 * Math.PI * r;

    console.log("The circumference of the circle is "+circumference+".");

    return circumference;



}

radiusOfCircle(radius);

//Bee Stings


var poundPerStings = 8.666666667;

function beeSting(victimWeight){

    var totalOfBeeStings = victimWeight * poundPerStings

console.log("It takes "+totalOfBeeStings+" bee stings to kill this animal.")


return totalOfBeeStings;

}

beeSting(weight);



