//reduce
let People = [{id: 1, name: 'edison' },{id: 2, name: 'Annand'}, 
{id: 3, name: 'Vasnath'}];
let groupbyid = People.reduce((r, a) => {
  r[a.id]=a[r.id]+1 || 1
   return r;
  }, {});
  console.log(groupbyid);

  // map
  
  let Arr = [3, 4, 5, 6];

let ModifiedArr = Arr.map(function(element){
    return element *3;
});

console.log(ModifiedArr); // [9, 12, 15, 18]

//filters
const Numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let Positive_array = Numbers.filter(function(value) {
    return value >= 0; });

console.log(Positive_array);
