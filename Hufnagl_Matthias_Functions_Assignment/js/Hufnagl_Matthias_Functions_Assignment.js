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


function grade( quiz, homework, assignment) {

    var gradeCalc = quiz + homework + assignment

    return gradeCalc;
}

var totalGrades = grade( parseInt(quiz), parseInt(homework), parseInt(assignment));




var averageGrade = function(a){

    var average = a / 3;

    return average

};



var average = averageGrade(totalGrades);

average = average.toFixed(2);

var passingGrade = 70;


if(average >= passingGrade){

    alert("You will pass the class with a " +average+".");
}else{

    alert("Sorry, you have failed the class with a "+average+".");

}
