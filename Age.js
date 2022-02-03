"use strict"
function CurrentAge(BirthYear){
    const ConvertToString = BirthYear + "";
if(typeof BirthYear === "number" && ConvertToString.indexOf(".") === -1)    {
    const year = new Date();
    const CurrentYear = year.getFullYear();
    const Age = CurrentYear - BirthYear;
    console.log(Age);
}else
 console.log("enter the valid value");
}
CurrentAge(2001);


"use strict";
let Dob = '19990108';
let Year = Number(Dob.substr(0, 4));
let Month = Number(Dob.substr(4, 2)) - 1;
let Day = Number(Dob.substr(6, 2));
let Today = new Date();
let Age = Today.getFullYear() - Year;
if (Today.getMonth() < Month || (Today.getMonth() == Month && Today.getDate() < Day)) {
  Age--;
}
console.log(Age);