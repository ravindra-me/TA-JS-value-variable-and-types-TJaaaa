// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("please enter the number"));
if(number%2===0){
  document.write("number is even");
}else{
  document.write("number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("please enter first number"));
let num2 = Number(prompt("please enter second number"));
if(num1>num2){
  alert(`max number is ${num1}`);
}else{
  alert(`max number is ${num2}`);
}
// 3. Convert the above code using`?` terniary operator
num1 > num2 ? alert(`max number ${num1}`) : alert(`max number ${num2}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("please enter house name");
if(houseName=="stark"){
  document.write("Winter is coming");
}else if(houseName=="lannister"){
  document.write("A lannister always pays his debt");
}else{
  document.write("All men must die");
}
// 5. Convert the above code using`?` terniary operator
houseName=="stark" ? document.write("Winter is coming") : houseName=="lannister" ? document.write("A lannister always pays his debt"): document.write("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let  days = Number(prompt("please enter month number"));
switch(days){
  case 1 :
    alert("month name is january it have 31 days");
    break
  case 2 :
    alert("month name is february it have 28 or 29 days");
    break
  case 3 :
    alert("month name is march it have 30 days");
    break
  case 4 :
    alert("month name is april it have 31 days");
    break
  case 5 :
    alert("month name is may it have 30 days");
    break
  case 6 :
    alert("month name is june it have 31 days");
    break
  case 7 :
    alert("month name is july it have 30 days");
    break
  case 8:
    alert("month name is august it have 31 days");
    break
  case 9:
    alert("month name is september it have 30 days");
    break
  case 10:
    alert("month name is october it have 31 days");
    break
  case 11:
    alert("month name is november it have 30 days");
    break
  case 12 :
    alert("month name is december it have 31 days");
    break 
  default:
    alert('it is not of months number');
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("enter salary ammount"));
salary<=20000 ? alert(`your handsome salary  without tax is ${salary - ((salary * 10)/100)} `) : 
salary<=40000 ? alert(`your handsome salary  without tax is ${salary - ((salary * 20)/100)} `) : alert(`your handsome salary  without tax is ${salary - ((salary * 30)/100)} `);

//  if..else vs switch 

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number (prompt("please enter your marks"));
if(marks > 100){
    alert(`Marks can't be greater than 100`);
}else if(marks > 80 && marks <100){
  alert(`Grade A`);
}else if(marks > 50 && marks < 80){
  alert(`Grade B`);
}else if(marks > 30 && marks < 50){
  alert(`Grade C`);
}else{
  alert(`Grade D`);
}
switch(true){
  case marks > 100:
    alert(`Marks can't be greater than 100`);
    break
  case marks > 80 && marks <100:
    alert(`Grade A`);
    break
  case marks > 50 && marks < 80:
    alert(`Grade B`);
    break
  case marks > 30 && marks < 50:
    alert(`Grade C`);
    break
  default:
    alert(`Grade D`);
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");
weather==="sunny" ? alert('Wear a T-shirt') : 
weather==="rainy" ? alert(`Dont't forger to take your raincoat`):
weather==="hot" ? alert(`Get a hanky`):
weather==="freezing" ? alert(`Get your sweeter on`) : alert(`Not a valid input`);