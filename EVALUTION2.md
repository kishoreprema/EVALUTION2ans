### 1. prime numbet 1 to 200
**Algorithm**
```
    - Step 1 . Start the program.
    - Step 2 . Initialize the values.
    - Step 3 . Check the condition.
    - Step 4 . print the output.
    - Step 5 . end the program.
```
**Psuedocode**
```
    start
        int the value
        print the output
        for( let i = startnum ; i <= endnum ; i++>)
        let flag = 0
        break
        if(i>1 && flag == 0)
    END
```


**code**
```javascript

var startnum =(1);
var endnum = (200);

console.log(`The prime numbers between ${startnum } and ${ endnum }} are:`);
for (let i = startnum; i <= endnum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
```

**output**
```console

The prime numbers between 1 and 200} are:
 2
 3
 5
 7
 11
 13
 17
 19
 23
 29
 31
 37
 41
 43
 47
 53
 59
 61
 67
 71
 73
 79
 83
 89
 97
 101
 103
 107
 109
 113
 127
 131
 137
 139
 149
 151
 157
 163
 167
 173
 179
 181
 191
 193
 197
 199
 ```

### 2. common array

**Algorithm**
```
    - Step 1 . Start the program.
    - Step 2 . Initialize the arrays.
    - Step 3 . Check the condition.
    - Step 4 . print the output.
    - Step 5 . end the program.
```
**psuedocode**
```
    START
        var a =[]
        var b = []
        for(let i of b)
        console.log
    END
```

**code**
```javascript
var a = [1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];

for(let i of a){
  if(b.includes(i)){
    console.log(i)
  }
}

```
**output**
```console
2
4
5
7

```

### 3. anatomy / anonymous / assigning function to variable

**Anatomy function**


**function definiton consists of function keyword is known as anatomy function**

**Algorithm**
```
    - Step 1 . Start the program.
    - Step 2 . Initialize the function.
    - Step 3 . call the function.
    - Step 4 . end the program.
```

**psuedocode**
```
    START
        function()
        call the function
    END
```

**code**
```javascript
function sayHi() {
    console.log("Hi!!!");
}
sayHi();
```

**output**
```console
Hi!!!
```

**Anonymous**


**The function without name os known as anonymous function**

**Algorithm**
```
    - Step 1 . Start the program.
    - Step 2 . ini a function with time out
    - Step 3 . end the program.
```
**psuedocode**
```
    START
        setTimeout(function)
    END

```

**code**
```javascript
setTimeout(function(){
    console.log("print in one seconds")
},1000);
```

**output**
```console
print in one seconds
```

**assigning function to a variable**


**A function is assigned to an variable is known as assigning function to an variable**

**Algorithm**
```
    - Step 1 . Start the program.
    - Step 2 . assign a function to an variable
    - Step 3 . call the variable.
    - Step 4 . end the program.
```
**psuedocode**
```
    START
        let print=function()
        print();
    END
```
**code**
```javascript
let print = function() {
    console.log('Assigning fuction to variable');
};

print();
```
**output**
```console
Assigning fuction to variable
```

##  4. Safeguarding function 
**Algorithm**
```
    - Step 1 . Start the program.
    - Step 2 . init a funcrtion
    - Step 3 . conditon
    - Step 4 . end the program.
```

**psuedocode**
```
    START
        function()
        if(typeof func == "function")
        array =[]
        f= function()
    END
```
**code**
```javascript
function fun(func){
    //Call the function but only if it is a function:
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
var array = [];
var f = function () {}
fun(array);
```
**output**
```console
Its not a function
```


## 5. explain this keyword 

**Algorithm**

    - Step 1 . Start the program
    - Step 2 . init an object .
    - Step 3 . use this function.
    - Step 4 . print the output,

**Psuedocode**
```
    START
        const person={}
        myFunction : function()
        console.log(person.myFunction)
    END
```
**code**
```javascript


const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this.id;
    }
  };
  console.log(person.myFunction());
```

**output**
```console
5566
```

## 6. This in function and class

**This is used in class**

**Algorithm**

 

var thisperson = function(){
    return this;
}
var obj = new thisperson();
console.log(obj);


### 7. map,reduce,filters

**map**
**map() creates a new array from calling a function for every array element.**
**map() calls a function once for each element in an array**


**Algorithm**
    step 1. Start the program.
    step 2. Initialize the variable
    step 3. And map the function
    step 4. Print result
    step 5.Stop.

**psuedocode**
```
    BEGIN
        arr=[]
        let modifiedArr = arr .map(function())
        console.log(modifiedArr)
    END
```

**code**
```javascript

 let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); 
```

**output**
```console
[9, 12, 15, 18]
```

**reduce**

**can be used to return almost anything.**

**It is often used to return a single number, like an sum, but it can also be used to combine the logic of Map and Filter to return an array of values matching certain criteria.**

**This can remove unnecessary iterations.**

**Algorithm**

    step 1. Start the program.
    step 2. Initialize the array
    step 3. And reduce the previousValue and currentValue
    step 4. Print result
    step 5.Stop.

**psuedocode**
```
    BEGIN
        init array
        let groupbyid = people.reduce((r,a)=>)
        return r 
        call array
    END
```

**code**
```javascript
let people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);
```

**output**
```console
```

**filters**

**The filter() method creates a new array with all elements that pass the test implemented by the provided functio**

**Algorithm**
```
    step 1. Start the program.
    step 2. Initialize the variable
    step 3. And filter the function
    step 4. Print result
    step 5.Stop.

```
**psuedocode**
```
    BEGIN
        init arr
        positive_array = number.filter()
        call positive_array
    END
```

**code**
```javascript
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array = numbers.filter(function(value) {
    return value >= 0; });

console.log(positive_array);
```

**output**
```console
[0, 1, 5, 12, 19, 20]
```

### 8 . 

### 9 . missing value in array

**Algorithm**
```
    step 1. Start the program.
    step 2. Initialize the array
    step 3. After that using arrow function to find the missing term
    step 4. Print result
    step 5.Stop.
```

**psuedocode**
```
    BEGIN
        init array
        r=arr.find((x,i) => arr[i+1]-x > 1) + 1;
        call the r
    END
```
**code**
```javascript
const arr = [1,2,3,5,6,7,8,9];

r=arr.find((x,i) => arr[i+1]-x > 1) + 1;
console.log(r);

```

**output**
```
4
```

### 10 . finding age using dob

**Algorithm**

   Step 1. Use Strict mode as global.
    Step 2. Create a function with a parameter of age.
    Step 3. Check the validation of the input.
    Step 4. Get today date by Date() and get the year from date.
    Step 5. Subract current year from birth year.
    Step 6. Call the function.

**psuedocode**
```
BEGIN
"use strict"
FUNCTION currentage(birthYear)
  INIT convertToString = birthYear + "";
IF(typeof birthYear === "number" && convertToString.indexOf(".") === -1)THEN
    INIT year = new Date();
    INIT currentYear = year.getFullYear();
    INIT age = currentYear - birthYear;
    PRINT(age);
ELSE
 PRINT("enter the valid value");
ENDIF 
FUNCTION END
FUNCTION CALL currentage(2001);
```
**code**
```javascript
"use strict"
function currentage(birthYear){
    const convertToString = birthYear + "";
if(typeof birthYear === "number" && convertToString.indexOf(".") === -1)    {
    const year = new Date();
    const currentYear = year.getFullYear();
    const age = currentYear - birthYear;
    console.log(age);
}else
 console.log("enter the valid value");
}
currentage(2001);
```
**output**
```console
21
```


### 11 . call by value and call by refernce

**In Pass by Value, Function is called by directly passing the value of the variable as the argument.**

**Changing the argument inside the function doesn’t affect the variable passed from outside the function.**

**Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).**


**Algorithm**
```
step 1. Start the program.
step 2. Initialize the variable and assigning value to variable.
step 3. change the value
step 4. Print result
step 5. Stop
```

**psuedocode**
```
    BEGIN
        inti a b
        declare b = a
        assing the value again for a
        console.log(a,b)
    END
```

**code**

```javascript
let a = 5;
    let b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);
```

**output**
```console
3
5
```

**call by reference**

**In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument.**

**Changing the argument inside the function affect the variable passed from outside the function.**

**In Javascript objects and arrays follows pass by reference.**

**Algorithm**

    step 1. Start the program.
    step 2. Initialize the variable and assigning value to variable.
    step 3. Changing the value of c
    step 4. Print result
    step 5. Stop.

**psuedocode**
```
    BEGIN
        Declare c
        d = c
        change the value of c
        console.log(c,d)
    END
```

**code**
```javascript
"use strict";
let c = { greeting : 'hi' };
    let d;
    d = c;
    c.greeting = 'kishore';
    console.log(c);
    console.log(d);
```

**output**
```console
{greeting: "kishore"}
{greeting: "kishore"}
```

### 12 . Arity

**The arity property used to return the number of arguments expected by the function.**

**You can access function’s arity via Function.length property.**

**Algorithm**
```
Step 1. Use Strict mode as global.
Step 2. Create a funciton with parameters.
Step 3. Get the length of details and assign to a variable.
Step 4. Print the variable.
```

**psuedocode**
```
    BEGIN
        function f()
        arity= function.length
        console.log(arity)
    END
```

**code**
```javascript
("use strict");
function f(a,b,c,d,e){}
    let arity = f.length;
console.log(arity);
```

**output**
```console
5
```

### 13 . currying 

**Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)**

**Currying doesn’t call a function. It just transforms it.**

**Algorithm**


Step 1. Use Strict mode as global.
Step 2. Create a function with parameter and assign to a variable.
Step 3. Return a the function inside the return function return another function with parameter.
Step 4. print tyhe output

**psuedocode**
```
    BEGIN
        let planets = function()
        return function()
        return ""
        var favplantes = planets("","")
        console.log(favplantes(""))
    END
```

**code**
```javascript

    ("use strict");
 let planets = function(a,c){
    return function(b){
        return"fav plantes is " +a +  " and " +b  + " and " 
        + c;
    }
}
 var favplanets = planets ("jupitor" , "mars");
 console.log(favplanets("earth"));
```

**output**
```console
fav plantes is jupitor and earth and mars
```

###  14 . what is ES6

**JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.**

**ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript programming language should work.**

### 15 . anonymous function

**An anonymous function is a function that was declared without any named identifier to refer to it.**
**As such, an anonymous function is usually not accessible after its initial creation.**


**Algorithm**

    step 1. Start the program.
    step 2. To create function without name.
    step 3. Print the result
    step 4. stop.


**psuedocode**
```
    BEGIN
        set timeout
        print
    END
```
**code**
```javascript
setTimeout(function(){
    console.log("print in one seconds")
},1000);
```

**output**
```console
print in one seconds
```

### 16 . named function

**The name of the function.**

**A list of parameters to the function, enclosed in parentheses and separated by commas.**

**The JavaScript statements that define the function, enclosed in curly brackets, {...}.**

**Algorithm**

    step 1. Start the program.
    step 2. To create function with name.
    step 3. After that return the arguments
    step 4. Print the result
    step 5 .stop.

**psuedocode**
```
    BEGIN
        function()
        console.log()
        call the function
    END
```

**code**
```javascript
function sayHi() {
    console.log("Hi!!!");
}
sayHi();
```

**output**
```console
Hi!!!
```

### 16 .  assigning function to an variable

**Anonymous functions can be assigned to a variable, making them named functions again.**

**By doing this you can separate the function definition from its use in an event-based method.**

**Algorithm**
```
    step 1. Start the program.
    step 2. To create function and assigning the function to variable.
    step 3. After that calling the function by using the variable name.
    step 4. Print the result
    step 5 .stop.
```

**psuedocode**
```
    BEGIN
        let print = function()
        call the function
    END
```

**code**
```javascript
let print = function() {
    console.log('Assigning fuction to variable');
};

print();
```

**output**
```console
Assigning fuction to variable
```







































