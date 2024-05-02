//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//1 task : .Test for equaility and inequality with strings
var string1 = "mango";
var string2 = "orange";
console.log(string1 != string2);
console.log(string1 == string2);
//2 task.test using the lower case function
var mixedCaseString = "Hello World";
console.log(mixedCaseString.toLowerCase() === "hello world");
console.log(mixedCaseString.toLowerCase() === "hello world");
//3 Task.Numerical tests involving equality and inequaility, greater than orequal to ,and less than or equal to
var num1 = 8;
var num2 = 4;
console.log(num1 !== num2);
console.log(num1 === num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 <= num2);
//4 Task test using "and" and "or" operators
var Condition1 = true;
var Condition2 = false;
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
//5 Task: .test weather an item is in array
var weather = ["apple", "Bannana", "Orange", "pineapple"];
console.log(weather.includes("Banana"));
//6.task . test weather an item is not an array
var fruits = ["apple", "Banana", "orange", "pineapple"];
console.log(fruits.includes("pineapple"));
