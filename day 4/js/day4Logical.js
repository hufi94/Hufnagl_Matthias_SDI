/*
Matthias Hufnagl
o3/05.2015
Section 00
Day 4 Logical
*/

//alert("Test");

//basic condisional , if we have engnou money to buy a car

//create a few varbles

var budget  = 15000;
var carPrice =23000;
var payCheck =14000;

if(budget > carPrice){
    console.log("you can afford your car")

} else{
     console.log("You broke");
}

//we can buy the car if our budjet is grather or equl to the car price or our paycheck is more then 1500

if(budget >= carPrice || payCheck > 14000){
    console.log("you can buy the car");
} else {

    console.log("you dont make enoungh money and your budget is low");
}


/*
True Table for || "Or"

t || t = t
t || f = t
f || t = t
f || f = f

True Table for && "And"

 t && t = t
 t && f = f
 f && t = f
 f && f = f


 */

//you can buy a car if the budget is grather than or eual the car price AND your paycheck is over 1500

if(budget >= carPrice && payCheck > 1500){
    console.log("you can buy the car");

}else {

    console.log("Pick a cheeper car car or find a better job")
}