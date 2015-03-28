/* Matthias Hufnagl
 3-28-15
 section 00
 Final Exam
 */

//alert("test to see if it werks");

var costItem =prompt("Hello, Please enter a the cost of your Item\n Please only enter Numbers");

while(costItem ===""|| isNaN(costItem)){


    var costItem =prompt("Please, don't leave blank and only enter Numbers.\nPlease enter a the cost of your Item\n");

}

var discountP =prompt("Please enter the discount of the Item you have chosen.\nPlease only enter Numbers")


var limitUp= 100;
var limitDown = 0;

while(discountP ===""|| isNaN(discountP) || (discountP > limitUp)|| discountP < limitDown ){


    var discountP =prompt("Please, don't leave blank and only enter Numbers.\nPlease enter a the cost of your Item\n");

}



function discountFunc(cost, discount){

   var discountPrice = costItem *(discountP/100);

      discountPrice = costItem - discountPrice;

    return discountPrice;


}


var results = discountFunc(costItem, discountP);



console.log("The final cost of the item that cost $"+costItem+" with a discount of "+discountP+"% is $"+results+".");


/*
first test/
I have type in for the original price $520 and for the discount 50% and the results was $260.

 second test/
 I have type in for the original price $800 and for the discount 20% and the results was $640.

 */


