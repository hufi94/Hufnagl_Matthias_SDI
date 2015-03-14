/* Matthias Hufnagl
 3-14-15
 section 00
 Day 6 falidation
 */

//alert("test to see if it werks");

//ask the use for a num so var

var num1 = prompt("please enter a number!")


//validate using a while

while(isNaN(num1)|| num1 ===""){
    //repropmt user

    if(num1=== ""){
        //the user left it blank
        num1 = prompt("please don lot leve blak, please type in a number")

    }else if(isNaN(num1)){

        num1 = prompt("please only type in numbers.\nplease enter a number")
    }




}


//ask the user a yes or no Q

var userInput= prompt("please enter yes or no");
//convert to lowercase
//validate
userInput = userInput.toLowerCase();

while(userInput != "yes" && userInput !="no" && userInput !="nope"){

    //reprompt
    userInput = prompt("please only in yes or no");

}