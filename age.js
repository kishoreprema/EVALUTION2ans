var dob = '19990108';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
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
