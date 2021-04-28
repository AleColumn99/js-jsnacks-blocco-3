$(document).ready(function() {

  let arr1 = [];
  let arr2 = [];

  //giusto perché non ho fantasia per farli a mano
  for (let i=0; i<16; i++) {
    arr1.push(generateRandomNumbers(1,99))
  }
  for (let i=0; i<11; i++) {
    arr2.push(generateRandomNumbers(1,99))
  }
  console.log(arr1);
  console.log(arr2);
  let difference = arr1.length - arr2.length;
  console.log(difference);
  for (let i=0; i<difference; i++) {
    arr2.push(generateRandomNumbers(1,99))
  }
  console.log(arr2);

});

function generateRandomNumbers (min, max) {
  return Math.ceil(Math.random() * max) + min;
}