const arr = [1,2,3,5,6,7,8,9];

r=arr.find((x,i) => arr[i+1]-x > 1) + 1;console.log(r);

