//reduce
var people = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = people.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);

  // map
  let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

//filters
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive_array = numbers.filter(function(value) {
    return value >= 0; });

console.log(positive_array);
