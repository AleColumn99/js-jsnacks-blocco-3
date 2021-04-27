$(document).ready(function() {

  var arr = [];
  var min = 8;
  var max = 36

  arr = generateNumbersBetween (arr, min, max);

  console.log(arr);

});

function generateNumbersBetween (array, a, b) {

  for (var i=a; i<=b; i++) {
    array.push(i);
  }

  return array;

}