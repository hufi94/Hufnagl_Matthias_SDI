/*
    Matthias Hufnagl
    o3/05.2015
    Section 00
    Day 2 intro
 */

//alert("testing to see if connected");

/*
Example of a mulilined comment.
anything indside of here will not be seen by the computer
 */

//Single line comment. Only this line will be ignored.

// Alert box- pop up that will alert the user with information

//alert("Text that the user will see");

//Console.log - shows info to the porgammer great for testing checking values and debugging
//also shows all errors
console.log("This is the console")

//declare any varlible//use the keyword of var
var whatever1;

//define the varliable
//sets the value of the existing variable
whatever1 = 42;

//console.logo the variable.

console.log("The variable whaterver1 is")
console.log(whatever1)

//declare and define a variable at the same tie.

var a = 2;

console.log(a);

var b;

a=a+3;
console.log(a);

//define this var using an existing variable

b= a+3;
console.log(a);
console.log(b);

//simple math
//find our ages

//declare and define the year we were born

var yearBorn =1994;

//2015 minus the year we were born

var ourAge = 2015-yearBorn;
console.log(ourAge);
//Talk about math
//+,-,*,/
//find the area of a triangle
//base times height/2
var base = 8;
var height = 5;

var areaTiangle= base*height/2;

console.log(areaTiangle)

//Modulo - %
//Gives the reminder

var decemal = 32/10;
console.log(decemal);

var reminder =32%10;
console.log(reminder);

//find out if even or odd
// %1=odd 0 =even

 var evenorodd = 67%2;
console.log(evenorodd);

/*
= Assigns the value to the variable
++ Adds 1 to the current value of the variable

-- Substaracts 1 from the current value of the variable

+= adds #to the current value of the variable

-=substracts the # from the current value of the variable

// /=devide the # of the current value of the variable

*= mulitply the curent value by the number



 */

var assign = 0;

//++ is the same as assign = assign+1;

assign++;

console.log(assign);


// is the same as assign = assign-1;

assign--;
console.log(assign);

// += ios the same as assign = assign = #

assign +=5; //assign +5
console.log(assign);

//-= # is the same as assign = assign - #

assign -=2;
console.log(assign);

// /= is the same as assign = assign/#
assign /=3;
console.log(assign);

// *= is the same as assign = assign * #;

assign *=7;
console.log(assign);

//stirngs - any text that we use
//quots are need =ed to setiquish between variable and plain text
var kermit = "light green";
var frogName = kermit;
console.log(frogName);

// to double quote or not double\
// can use and esape carracter \ backslash in fornt of the '

var phrase = 'I don\'t know ';
console.log(phrase);

//escape carracter can aslo do multible lines \n - new line carracter

var pharse2 = "I don't know. \n You never do!";
console.log(pharse2);

//boolean -kind of like a light switch
//either true or false

// Not a text string and must be lowercase

var yes = true;

var nope = false;

//order of operation
 //PEMDAS - please exuse my dear ant sally
// parrantisis, Exponents, multiplication , devision, addision ,subtracton,

//find the avagrage quiz grade

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

//avergage - add them up and divide by the number of quizes
var avergage = quiz1 + quiz2 +quiz3 /3
console.log(avergage);


//contcatanation -conbinding text strings
// use the + plus sign - add and contcatanation

var firstname = "Kermit";
var lastname = "the frog";
var fullname = firstname + " " +  lastname;

console.log(fullname);


//if you want the text stirng to be a number you have to cast it

// Number(the text strings)


var d = 6;
var e ="7";
var combind = d+Number (e);

console.log(combind);

// NAN : Not A Number

//to round a number we use .toFIxed(#)

var pi = 3.14;

var num = 5.8476783940;

// round to 3 decemal places
var n = num.toFixed(2);

console.log("The rounded numer to 2 decimal places is "+n);






