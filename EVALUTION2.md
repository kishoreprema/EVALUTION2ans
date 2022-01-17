### 1. prime numbet 1 to 200
**Algorithm**

    - Step 1 . Start the program.
    - Step 2 . Initialize the values.
    - Step 3 . Check the condition.
    - Step 4 . print the output.
    - Step 5 . end the program.

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

    - Step 1 . Start the program.
    - Step 2 . Initialize the arrays.
    - Step 3 . Check the condition.
    - Step 4 . print the output.
    - Step 5 . end the program.

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

    - Step 1 . Start the program.
    - Step 2 . ini a function with time out
    - Step 3 . end the program.

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
    - Step 1 . Start the program.
    - Step 2 . assign a function to an variable
    - Step 3 . call the variable.
    - Step 4 . end the program.

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

## Safeguarding function 
**Algorithm**
    - Step 1 . Start the program.
    - Step 2 . init a funcrtion
    - Step 3 . conditon
    - Step 4 . end the program.

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





