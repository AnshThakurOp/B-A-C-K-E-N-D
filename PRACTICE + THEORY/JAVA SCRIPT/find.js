var arr = [1, 2, 3, 4, 5, 0];

var ans = arr.find(function (val) {
  if (val === 2) return val; // Returns undefined as 100 is not present in the array.
});

console.log(ans);
