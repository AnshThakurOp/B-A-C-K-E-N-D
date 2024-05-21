// In the filter function we filter out the elements in the array according ton our need . For the value to be take we use return true whereas remaining values are not ignored(false)

var arr = [1, 2, 3, 4, 5];
var ans = arr.filter(function (val) {
  if (val > 2) {
    return true;
  } else return false;
});
console.log(ans);
