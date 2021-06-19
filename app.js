// chapter 1
// Question no 1
// 1. Write a script to greet your website visitor using JS alert box
alert("good morning")

// Question no 2
// 2. Write a script to display following message on your web page:
alert("please enter a valid password")

// Question no 3
// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("welcome to js land... \n happy coding!")

// Question no 4
// 4. Write a script to display following messages in sequence:
alert ("Welcome to JS World");
alert ("Happy Coding!" + "\n" + "Prevent this page from creating additional dialogs");

// Question no 5
// 5. Generate the following message through browser’s developer console:
alert ("hello... i can run js through browser’s developer console:");

// Chapter 02
// Question No 1
// 1. Declare a variable called username.
var username

// Question No 2
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
 var myName = "SAMAN SALEEM";

// Question No 3
// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message
 message = "Hello World";
 alert(message);

// Question No 4
// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes

 var name = "Saman saleem";
 var age = "My age is 20 years";
 var education = "Certified Web and Mobile Developer";

 alert(name);
 alert(age);
 alert(education);

 // Question No 6
//  6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

 var email = "saleemsuman828@gmail.com";
 alert("My Email Address is " + email);

// Question No 7
// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A Smarter Way to Learn Java Script";
alert("I am trying to learn from the book " + book);

// Question No 8
// 8. Write a script to display this in browser through JS

document.write("Yah! i can write HTML content through Java Script");

// Question No 9
// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 alert(a);
 // Chapter No 03
// Question No 01
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = "I am 20 Years Old";
alert(age);

// Question No 02
// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

 var visit = 14;
 alert ("You have visited this is site "+ visit + " " +"times") ;

// Question No 03
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

 var birthYear = 2000;
 document.write("My Birth Year is 2000" + "<br>" + "Data type of my decleared avriable is" + " " + typeof(birthYear));

// Question No 04
// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "Sanab";
var productTitle = "Mobile Phone";
var quantity = 01;
 document.write(visitorName + " " + "ordered" + " " + quantity + " " + productTitle + " " + "on XYZ Mobile Store");

 // Chapter No 04
// Question No 01
// 1. Declare 3 variables in one statement

var name = "Suman" , username = "saleemsuman828" , education = "inter";

// Question No 3
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h1> Rulesfor naming JS Variables </h1>" +
"<br>" + "Variable can oly contain letters, numbers, $sign and underscore" + 
"<br>" + "variable must begins with a $sign, underscore or letter for examle $name , _name , name"
 + "<br>" + "Variable names are case sensitive" + "<br>" + "Variables names should not be a JS Keyword");

 // Chapter No 05
// Question No 01
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

var a = 3;
var b = 5;
var c = a+b;
 document.write("sum of 3 and 5 is " + c);

 // Question No 02
//  2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var a = 3;
 var b = 5;
 var c = b-a;
 document.write("subtraction of 5 and 3 is " + c);

 var a = 3;
 var b = 5;
 var c = a*b;
 document.write("Multiple of 3 and 5 is " + c);

 var a = 3;
 var b = 5;
 var c = b/a;
 document.write("division of 5 and 3 is " + c);

 var a = 3;
 var b = 5;
 var c = b%a;
 document.write("modulus of 5 and 3 is " + c);

 // Question No 03
//  3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value

var a
 document.write("Value after variable declartion is " + a + "<br>");
 a = 5
 document.write("Initial value of the Variable is " + a + "<br>");
 document.write("Value of variable after increment is " + ++a + "<br>");
 var b = a+7;
 document.write("The value of variable after addition of 7 is " +b+ "<br>");
 document.write("Value of variable after decrement is " + --b + "<br>");
 document.write("the value of reminder after division by 3 is " + b%3);

// Question No 4
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

 var ticketPrice = 600;

 document.write("The price of one ticket is 600PKR" + "<br>" + 
 "The price of 5 tickets to watch movie will be " + ticketPrice*5 + "PKR");

 // Question No 5
//  5. Write a script to display multiplication table of any
// number in your browser. E.g

var a = 3;

 document.write("<h1> Table of 3 </h1>" + "<br>"+ 
 "3 X 1 = " + a*1 + "<br>"+
 "3 X 2 = " + a*2 + "<br>" +
 "3 X 3 = " + a*3 + "<br>" +
 "3 X 4 = " + a*4 + "<br>" +
 "3 X 5 = " + a*5 + "<br>" +
 "3 X 6 = " + a*6 + "<br>" +
 "3 X 7 = " + a*7 + "<br>" +
 "3 X 8 = " + a*8 + "<br>" +
 "3 X 9 = " + a*9 + "<br>" +
 "3 X 10 = " + a*10 + "<br>");

 // Question No 06
//  6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var temp1 = 25;
 var a =(temp1*9/5)+32;

 var temp2 = 70;
 var b = (temp2-32)*5/9;


 document.write(temp1 + "°C is equal to " + a +" "+"°F" + "<br>" +
 temp2 + "°F is equal to "+ b +" "+ "°C" )

// Question No 7
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

 var item1 = 650;
 var item2 = 100;
 var shippingCharges = 100;
 var quantity1 = 3;
 var quantity2 = 7;
 var totalCost = (item1*quantity1)+(item2*quantity2)+shippingCharges

 document.write("<h1> Shopping Cart </h1>" + "<br>" +
 "Price of item 1 is " + item1 + "<br>" +
 "Quntity of item1 is " +quantity1 + "<br>" +
 "Price of item 1 is " + item2 + "<br>" +
 "Quntity of item1 is " +quantity2 + "<br>" +
 "Total cost of your order is " + totalCost)

 // Question No 8
//  8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var marksObtain = 804 , totalMarks = 980;

 document.write("<h1> Marks Sheet </h1>" + "<br>" +
 "Marks obtained by the student is " + marksObtain + "<br>" + 
"Total Marks = " + totalMarks + "<br>" + 
 "Percentage of the exam is = " + marksObtain/totalMarks*100 + "%")

// Question No 9
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

 var US$ = 104.80
 var saudiRiyal = 28
 var PakRs = (10*US$)+(25*saudiRiyal)
 document.write("Total currency in PKR is = "+PakRs);

// Question No 10
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

 var a = 5
 var b = 5+a*10/a
 alert(b);

// Question No 11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

 var birthYear = +prompt("Enter Your Birth Year", "Enter Your Birth Year");
 var currentYear = +prompt("Enter Current Year","Enter Current Year");

 document.write("<h1>Age Calculator</h1>" + "<br>"
 + "Birth Year is " + birthYear + "<br>" +
 "Current Year is " + currentYear + "<br>"+
 "Your age is " + (currentYear-birthYear))

 // Question No 12
//  12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

 var radius = 20;

 document.write("<h1>The Geometrizer</h1>"+ "<br>"+
 "The Radius of the circle is " + radius + "<br>" +
 "The Circumferance of the circle is " + (2*3.142*radius) + "<br>" +
 "The area of the circle is " + (3.142*radius*radius));

// Question No 13
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.

 var favSnack = "Pizza";
 var currentAge = 33;
 var maxAge = 63;
 var amtPerDay = 1;
 document.write("<h1>The Life Time Supply Calculator</h1>" + "<br>"+
 "Your favorite snack is: " + favSnack +"<br>" +
 "Your Current Age is: "+currentAge + "<br>" + 
 "Your Max Age is: "+maxAge +"<br>"+
 "Amount of snack per Day is: "+amtPerDay +"<br>"+
 "You will need "+(amtPerDay*365*(maxAge-currentAge))+ " "+favSnack +" "+"Untill the age of  " + maxAge +" "+"Years" )

 // chapter No 06 - 09
// Question No 1
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;

 document.write("Result:" + "<br>" + "The Value of a is "+a+"<br>"+
 "The value of ++a is "+(++a)+"<br>"+
 "Now the value of variable a is: "+a+"<br>"+
 "The value of a++ is: "+(a++)+"<br>"+
 "Now the value of variable a is: "+a+"<br>"+
 "The Value of --a is: "+(--a)+"<br>"+
 "Now the value of variable a is "+a+"<br>"+
 "The value of a-- is: "+(a--)+"<br>"+
 "Now the value of a is: "+a)

 // Question No 02
//  2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 2 , b = 1;
 var result = "--a - --b + ++b + b--";

 document.write("Variable a is: "+ a +"<br>"+
 "variable b is: " + b + "<br>"+
 "Calculation: "+"<br>"+
 "--a is: "+(--a)+"<br>"+
 "--b is: "+(--b)+"<br>"+
 "--a - --b is: "+(--a - --b)+"<br>"+
 "++b is: "+(++b)+"<br>"+
 "b-- is :"+(b--)+"<br>"+
 "++b + b-- "+(++b + --b)+"<br>"+
 "--a - --b + ++b + b-- is equal to "+(--a - --b + ++b + b--));

 // Question No 3
//  3. Write a program that takes input a name from user &
// greet the user.

 var name = prompt("Enter Your Name","Enter Your Name")
 alert("Hello "+name);

// Question No 5
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


var table = +prompt("Enter any number");
 document.write("Table of "+ table  + "<br>"+ 
 table+" "+"X"+" "+"1"+" "+"="+" "+table*1+"<br>"+
 table+" "+"X"+" "+"2"+" "+"="+" "+table*2+"<br>"+
 table+" "+"X"+" "+"3"+" "+"="+" "+table*3+"<br>"+
 table+" "+"X"+" "+"4"+" "+"="+" "+table*4+"<br>"+
 table+" "+"X"+" "+"5"+" "+"="+" "+table*5+"<br>"+
 table+" "+"X"+" "+"6"+" "+"="+" "+table*6+"<br>"+
 table+" "+"X"+" "+"7"+" "+"="+" "+table*7+"<br>"+
 table+" "+"X"+" "+"8"+" "+"="+" "+table*8+"<br>"+
 table+" "+"X"+" "+"9"+" "+"="+" "+table*9+"<br>"+
 table+" "+"X"+" "+"10"+" "+"="+" "+table*10)

// Question No 6
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.


 var sub1 = "Physics",sub2 = "Chemistry", sub3 = "Maths";
 var totalMarks = 100;
 var sub1ObtainedMarks = +prompt("Enter The Marks of Subject 1","Enter The Marks of Subject 1");
 var sub2ObtainedMarks = +prompt("Enter The Marks of Subject 2","Enter The Marks of Subject 2");
 var sub3ObtainedMarks = +prompt("Enter The Marks of Subject 3","Enter The Marks of Subject 3");

 document.write("<h1>Marks Sheet</h1>"+"<br>"+
 "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"+
 "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+sub1ObtainedMarks+"</td><td>"+(sub1ObtainedMarks/totalMarks*100)+"%</td></tr>"+
 "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+sub2ObtainedMarks+"</td><td>"+(sub2ObtainedMarks/totalMarks*100)+"%</td></tr>"+
 "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+sub3ObtainedMarks+"</td><td>"+(sub3ObtainedMarks/totalMarks*100)+"%</td></tr>"+
 "<tr><td>Total</td><td>"+(totalMarks+totalMarks+totalMarks)+"</td><td>"+(sub1ObtainedMarks+sub2ObtainedMarks+sub3ObtainedMarks)+"</td><td>"+(sub3ObtainedMarks+sub2ObtainedMarks+sub1ObtainedMarks)/(totalMarks+totalMarks+totalMarks)*100+"%</td></tr>")


// Chapter No 09 - 11
// Question No 1
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


var city = prompt("Enter Your City Name","Enter Your City Name");
 if(city=="Karachi"){
     alert("Welcome to the City of Lights")
 }
 else{
     alert("Welcome to "+city)
 }

// Question No 02
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

 var gender = prompt("Enter Your Gender","Enter Your Gender");

 if(gender=="Male"){
     alert("Welcome Sir")
 }else{
    alert("Welcome Ma'am")
 }

//  Question No 3
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

 var signalColor = prompt("Enter Traffic Signal Light Color","Enter Traffic Signal Light Color");
 if(signalColor == "Red"){
     alert("Must Stop")
 }else if(signalColor == "Orange"){
     alert("Ready to Move")
 }else if(signalColor == "Green"){
     alert("Move Now")
 }else{
     alert("There is no Such Color In Traffic Signal Light")

 }
 // Question No 4
//  4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    

var remainingFuel = +prompt("Enter Remaining Fuel in Your Car","Enter Remaining Fuel in Your Car");

 if(remainingFuel <= 0.25){
     alert("Please Refill the Fuel in Your Car")
 }else{
     alert("Continue Your Journey")
 }

// Question No 5
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }

 var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }

 var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }

 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }

 if (true){
     alert("True");
     }
 if (false){
     alert("False");
     }
 if("car" < "cat"){
     alert("car is smaller than cat");
     }
 // Question No 6
//  6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


var totalNumber = 300
 var obtainMarks = +prompt("Enter Your Marks Obtained","Enter Your Marks Obtained");
 var percentage = obtainMarks/totalNumber*100
 document.write("<h1>Marks Sheet</h1>"+"<br>"+
 "Total Marks: "+totalNumber+"<br>"+
 "Marks obtained: "+obtainMarks+"<br>"+
 "Percentage: "+percentage+"%"+"<br>")
 if(percentage >= 80){
     document.write("Grade: A-ONE" +"<br>")
 }else if(percentage >=70 && percentage <80){
     document.write("Grade: A"+"<br>")
 }else if(percentage >=60 && percentage <70){
     document.write("Grade: B"+"<br>")
 }else {
     document.write("Fail"+"<br>")
 }
 if(percentage >= 80){
     document.write("Exellent" +"<br>")
 }else if(percentage >=70 && percentage <80){
     document.write("Good"+"<br>")
 }else if(percentage >=60 && percentage <70){
     document.write("You Need to Improve"+"<br>")
 }else {
     document.write("Sorry"+"<br>")
 }

// Question 07
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var guessNumber = 6;

 var userGuess = +prompt("Guess the Number from 1-10","Guess the Number from 1-10");
 if(userGuess == guessNumber){
     alert("Bingo You Won!!!")
 }else if (userGuess == guessNumber++ || userGuess == guessNumber){
     alert("Close Enough to The Correct Number. Try Again")
 }else{
     alert("Sorry. Try Again")
 }

// Question No 8
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

 var number = +prompt("Enter any Number","Enter any Number");
 var modulus = number%3

 if(modulus == 0){
     alert("The Number is divisible by 3")
 }else{     alert(number +" "+"is not divisiable by 3")

 }
 // Question No 9
//  9. Write a program that checks whether the given input is an
// even number or an odd number.

 var number = +prompt("Enter any Number","Enter any Number");
 var modulus = number%2

 if(modulus == 0){
     alert(number +" "+"is a even number")
 }else{
     alert(number +" "+"is a odd number")
 }

// Question No 10
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria

 var temp = +prompt("Enter Today's Temperature","Enter Today's Temperature");
  if(temp >=30 && temp<40){
     alert("The Weather of Today is Normal")
 }else if(temp>=20 && temp<30){
     alert("The Today's Weather is cool")
 }else if(temp<20 && temp>=10){
     alert("The weather is Cool Today")
 }else if(temp<10){
     alert("OMG!! The Weather is so Cold Outside")
 }else{
     alert("It's too Hot Outside")
 }

 var firstNumber = +prompt("Enter First Number","Enter First Number");
 var secondNumber = +prompt("Enter Second Number","Ente Second Number");
 var Operation = prompt("Enter Operation","Enter Operation Like + - * / and %");

 if(Operation == "*"){
     alert(firstNumber*secondNumber)
 }else if(Operation == "/"){
     alert(firstNumber/secondNumber)
 }else if(Operation == "-"){
     alert(firstNumber-secondNumber)
 }else if(Operation == "%"){
     alert(firstNumber%secondNumber)
 }else if(Operation == "+"){
     alert((firstNumber+secondNumber))
 }

// Chapter No 12 -13
// Question No 01
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


var character = prompt("Enter any character of number");
 if((character.charCodeAt())>=48 && character.charCodeAt() <= 57){
     alert("It's a number")
 }else if((character.charCodeAt())>=65 && character.charCodeAt() <= 90){
     alert("It's an Uppercase Character")
 }else if((character.charCodeAt())>=97 && character.charCodeAt() <= 122){
     alert("It's a Lowercase Character")

 }
 // Question No 02
//  2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var firstNumber = +prompt("Enter First Number","Enter First Number");
 var secondNumber = +prompt("Enter Second Number","Enter Second Number");
 if (firstNumber > secondNumber){
     alert(firstNumber+" "+"is greater than "+secondNumber)
 }else if (firstNumber == secondNumber){
     alert(firstNumber+" "+"is equal to "+secondNumber)
 }else{
     alert(secondNumber +" "+"is greater than "+firstNumber)
 }
// Question No 03

var number = +prompt("Enter any Number","Enter any Number positive or negative or zero");

 if(number > 0){
     alert(number +" "+"is Positive Integer")
 }else if(number<0){
     alert(number +" "+"is a Negative Integer")
 }else{
     alert(number+" "+"Number is Zero")
 }

// Question No 04

 var alphabet = prompt("Enter any single alphabet");
// if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u" ){
     alert(alphabet+" "+"is a vowel")
// }else{
//     alert(alphabet+" "+"is not a vowel")
// }

// Question No 05

 var password = "abc123";

 var userInput = prompt("Enter Your Password","Enter Your Password");

// if(userInput === password){
     alert("Coreect Password")
// }else(
     alert("Incorrect Password")
// )
// Question No 06

 var greeting;
 var hour = +prompt("Enter Hour in 24 Format","Enter Hour in 24 Format like 13 or 14")
// if (hour < 18) {
 greeting = "Good day";
 alert("Have a Good Day");
// }else{
 greeting = "Good evening";
 alert("Have a Good Evening");
// }

// Question 07

 var hour = +prompt("Enter Hour in 24 Format","Enter Hour in 24 Format like 1300 or 1400")
// if (hour >=0000 && hour <1200) {
     alert("Good Morning");
// }else if (hour >=1200 && hour < 1700) {
     alert("Good Afternoon");
// }else if (hour >=1700 && hour < 2100) {
     alert("Good Evening");
// }else{
     alert("Good Night")
// }


// Chap 17- 20

// Question No 1

// var arr =[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// Question No 2

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){

//     }
// }console.log(i)

// Question No 3


// for(i=1;i<=10;i++){
//     console.log(i)
// }

// Question No 4

// var table = +prompt("Enter the table which you want to print");
// var length = +prompt("Enter the length of the table");
// for(i=1;i<=length;i++){
//     document.write(table +" X"+i+" ="+table*i+"<br>")
// }

// Question No 5

// var fruits =["apple","banana","orange","mango","strawberry"]
// document.write(fruits+"<br>")
// for(i=0;i<fruits.length;i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>")
// }

// Question No 6
//  document.write("Counting: <br>")
// for(i=1;i<=15;i++){
//     document.write(i+", ")
// }
// document.write("<br><br>")
// document.write("Reverse Counting: <br>")
// for(i=10;i>=1;i--){
//     document.write(i +", ")
// }
// document.write("<br><br>")

// document.write("Even Number: <br>")
// for(i=1;i<=20;i++){
//     if(i%2 === 0)
//     document.write(i +", ")
// }
// document.write("<br><br>")
// document.write("Odd Number: <br>")
// for(i=1;i<=20;i++){
//     if(i%2 !== 0)
//     document.write(i+", ")
// }
// document.write("<br><br>")
// document.write("Series: <br>")
// for(i=2;i<= 20;i=i+2){
//      document.write(i+"K, ")
    
// }


// Question No 7

// var bakery = ["cake","applepie","cookies","chips","paties"]


// var user = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am","Enter Your Item")

// var flag = false;
//  for (var i = 0; i <= bakery.length; i++){
//     if (user === bakery[i]) {
//         flag = true;
//     alert(user+" is avialable at index "+i);
//  } 
// }
//  if (flag === false) {
//  alert("Item is not available"); }


// Question No 8

//var arr =[24,53.78,91,12]
// var max = -Infinity
// for(var i =0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// document.write("Array Items are: "+arr+"<br>The Largest Number is: "+max)

// Question No 9

// var arr = [24,53.78,91,12]
// var min = Infinity

// for(var i =0; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }document.write("Array Items are: "+arr+"<br>The Smallest Number is: "+min)

// Question No 10

// for(var i=0;i<=100;i++){
//     if(i%5 === 0)
//     console.log(i)
// }


// Changing Case

// Question No 01

// var input = prompt("Enter Your Name");
// document.write(input.toUpperCase());

// Question No 02

// var input = prompt("Enter Your Name");
// document.write(input.toLowerCase());

// Strings: measuring length and extracting parts

// Question No 03

// var input = prompt("Enter Your Favorite Mobile Phoone Model");
// document.write(input.length);

// Question No 4

// var input = prompt("Enter any statement");
// var leng = input.length;
// document.write(input.charAt(leng-1))

// Strings: finding segments

// Question No 5

// var word = "Pakistani";
// document.write(word.indexOf("n"));

// Question No 6

// var input = prompt("Enter any Word");
// for (var i = 0; i < input.length; i++) {
//     if (input[i] === "@" || input[i] === "." || input[i] === "," || input[i] === "!") {
//         alert("Enter Valid word");
//         break;
//     }
   
    
// }



// Strings: finding a character at a location
// Question No 08

// var str = "pakistani";
// document.write("The letter on index 3 is " + str.charAt(3))


// Strings: replacing characters

// Question No 09

// var str = "hyderabad"
// document.write(str.replace("hyder","islam"))

// Question No 10

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"));
