console.log("I was born in Indianapolis");
console.log("I've lived in three states");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.")

var tweet = "Lebron is king! Westbrook for president!";
var facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
var username = 'jamespauloconner'

var password = "123456789HELLO";
var birthDay = "August 11"

var birthCity = "New York";
var birthState = "NY";

console.log(birthCity + " , " + birthState);

var gradYear = 1994;
var highSchool = "Bill Murray High School";

console.log("I graduated from " + highSchool + " in " + gradYear + ".")

//length - returns the length of a string (including spaces)
console.log(highSchool.length);

//lower or upperdase
console.log(highschool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" "))//splits the string into array on each space
['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(10)); //cuts off everything before the nth index
