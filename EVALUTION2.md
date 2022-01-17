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