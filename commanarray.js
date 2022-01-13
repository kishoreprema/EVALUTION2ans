var a = [1,2,3,4,5,6,7,8,9,10];
var b = [2,4,5,7,11,15];

for(let i of a){
  if(b.includes(i)){
    console.log(i)
  }
}