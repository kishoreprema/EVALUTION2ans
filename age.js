"use strict";
let dob = '19990108';
let year = Number(dob.substr);
let month = Number(dob.substr) - 1;
let day = Number(dob.substr));
let today = new Date();
let age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
console.log(age);

var year_born = 1998;
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
  var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
console.log("Hello, " + "you are " + calculatedAge + " years old!");
