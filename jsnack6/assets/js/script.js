/* $(document).ready(function() {

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
} */

//ES6
const codeGenerator = () => {
  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
  var code = "";
  while(code.length < 3){
    code += alphabet[getRandomNumber(0, alphabet.length - 1)];
  }
  while(code.length < 6){
    code += getRandomNumber(1, 9);
  }
  return code;
}

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = ['a','b','x','e'];
let minor = arr1;
let major = arr2;
if (arr1.length > arr2.length) {
  minor = arr2;
  major = arr1;
}

if (arr1.length === arr2.length) {
  console.log('sono uguali')
} else {
  while (minor.length < major.length) {
    minor.push(codeGenerator());
  }
  console.log(minor)
}