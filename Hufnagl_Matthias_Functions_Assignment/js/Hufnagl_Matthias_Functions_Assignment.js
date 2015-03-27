/* Matthias Hufnagl
 3-26-15
 section 00
 Day 8 Functions_Assignment
 */

//alert("test to see if it works");


var quiz = prompt("We want to see if you will pass the class \n Please enter your quiz grade to see if you\n passed the class. Please only enter numbers");


while (quiz === ""|| isNaN(quiz)) {
       quiz =prompt("Error, Please don't leave it blank\n and only enter numbers. Please Enter a Number")

    }


var homework = prompt("Please, Enter your homework grade to \nvalidate your average grade.\n Please only enter numbers");


while (homework === ""|| isNaN(homework)) {
    homework =prompt("Error, Please don't leave it blank\n and only enter numbers. Please Enter a Number")

}


var assignment = prompt("Please, Enter your grade number you have\nreceived on your assignment\nPlease only enter numbers");


while (assignment === ""|| isNaN(assignment)) {
    assignment =prompt("Error, Please don't leave it blank\n and only enter numbers. Please Enter a Number.")

}


