/* Matthias Hufnagl
 3-26-15
 section 00
 Day 9 Pizza
 */

//alert("test to see if it werks");

//figure out how much pizza cost per slice and cost per sq



//create a function that will run all of the athe rfunction







var pizzaRadius =prompt("Welcome, let's calculate the cost of your pizza!\nWhat is the radius of your pizza");

while(pizzaRadius===""|| isNaN(pizzaRadius)){
    pizzaRadius =prompt("please don't levve blank and only type in numbers"/"what is the radius of the pizza")


}




do{
var pizzaCost =prompt("How much does your pizza cost in total \n remember please ");

}while(pizzaCost===""|| isNaN(pizzaCost));


do{
    var pizzaSlices = prompt("how many slices are in your pizza ");



}while(pizzaSlices===""|| isNaN(pizzaSlices));

//func that calc the area of the pizza


//main code call lord func

var results =lordFunction(pizzaRadius, pizzaCost, pizzaSlices );

console.log("yo pizza costs $ " +results[0]+ " per square inch or $ " +results[1]+ " per slice")


function lordFunction(radius, cost, slices){
     //func will call all the func and then return the values

var area = pizzaArea(radius);
    //call the function for sq in

    var areaCost = pizzaSqInCost(area, cost);

    var slicesPrice = pricePerSlice(slices, cost)

    return [areaCost, slicesPrice]

}




function pizzaArea(r){

    //area = r*r *Pi

    var area =r*r*Math.PI;
    return area;

}

//fucn that calculates the pirce per sq inch of the pizza

function pizzaSqInCost(area, price){
    //price / area
    var costPerSqIn = price/area;
    //we should round this number

    costPerSqIn = costPerSqIn.toFixed(2);

    return costPerSqIn;
}

//function tht calcules the cost per sq In

function pricePerSlice(slices,price){

    var costPerSlice =price/slices;

    costPerSlice =costPerSlice.toFixed(2);

    return costPerSlice;
}