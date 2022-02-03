/*const Arr = [1,2,3,5,6,7,8,9];

r=Arr.find((x,i) => Arr[i+1]-x > 1) + 1;
console.log(r);*/



const a = [1,2,3,5,6];
console.log(a);
console.log(count = Math.max(...a));
const missing = [];
for ( var i = 1; i <= count; i++ ) {
  if (a.indexOf(i) == -1) {
    console.log(missing.push(i));
  }
}
console.log(missing);