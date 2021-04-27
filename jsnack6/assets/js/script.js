$(document).ready(function() {

  var arr1 = [];
  var arr2 = [];

  //giusto perché non ho fantasia per farli a mano
  for (var i=0; i<16; i++) {
    arr1.push(generateRandomNumbers(1,99))
  }
  for (var i=0; i<11; i++) {
    arr2.push(generateRandomNumbers(1,99))
  }
  console.log(arr1);
  console.log(arr2);
  var difference = arr1.length - arr2.length;
  console.log(difference);
  for (var i=0; i<difference; i++) {
    arr2.push(generateRandomNumbers(1,99))
  }
  console.log(arr2);

});

function generateRandomNumbers (min, max) {
  return Math.ceil(Math.random() * max) + min;
}