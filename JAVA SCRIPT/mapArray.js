// Map array is used to make new array same as the length of the array whose map is to be formed, the values in the mapped array we can change

var arr = [1, 2, 3, 4, 5]; // length is 5
var mapArray = arr.map(function (val) {
  return 13; // A mapped array of same size as length 5 with the value of 5
});
console.log(mapArray);

console.log(
  arr.map(function (val) {
    return val; //Return the same value as present in the array
  })
);

console.log(
  arr.map(function (val) {
    return val * 10; // Return the element of the array * 10 as the element for the mapped array
  })
);
