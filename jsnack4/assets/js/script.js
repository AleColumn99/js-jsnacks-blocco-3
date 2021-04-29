/* $(document).ready(function() {

  var playerNumber = 5;

  var team = [];

  for (var i=0; i<playerNumber; i++) {
    
    var player = {};

    code = generateRandomLetters(3) + generateRandomNumbers(3, 0, 9);
    average = parseInt(generateRandomNumbers (1, 0, 50));
    percentage = parseInt(generateRandomNumbers (1, 0, 100));

    player.playerCode = code;
    player.pointAverage = average;
    player.threePointPercentage = percentage;

    team.push(player);

  }

  console.log(team);

}); */

/* $(document).ready(function() {

  var team = [
    {
      name: 'Mario'
    },
    {
      name: 'Giovanni'
    },
    {
      name: 'Francesco'
    },
    {
      name: 'Filippo'
    },
    {
      name: 'Luca'
    }
  ];

  for (var player of team) {

    player.code = generateRandomLetters(3) + generateRandomNumbers(3, 0, 9);
    player.average = generateRandomNumbers (1, 0, 50);
    player.percentage = generateRandomNumbers (1, 0, 100);

  }

  console.log(team);

});

//FUNZIONI

//Funzione per generare N lettere maiuscole
function generateRandomLetters (numLetters) {

  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var returnString = '';

  for (var i=0; i<numLetters; i++) {
    returnString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return returnString;

}
//Funzione per generare N numeri
function generateRandomNumbers (numNumbers, min, max) {

  var returnNumbers = '';

  for (var i=0; i<numNumbers; i++) {
    returnNumbers += Math.ceil(Math.random() * max) + min;
  }

  return returnNumbers;

} */

//ES6

//Funzione per generare N numeri
const generateRandomNumbers = (numNumbers, min, max)  => {
  let returnNumbers = '';
  for (let i=0; i<numNumbers; i++) {
    returnNumbers += Math.ceil(Math.random() * max) + min;
  }
  return returnNumbers;
}

//Funzione per generare N lettere maiuscole
const generateRandomLetters = (numLetters) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let returnString = '';
  for (let i=0; i<numLetters; i++) {
    returnString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return returnString;
}

const team = [{name: 'Mario'}, {name: 'Giovanni'}, {name: 'Francesco'}, {name: 'Filippo'}, {name: 'Luca'}];

for (var player of team) {

  player.code = generateRandomLetters(3) + generateRandomNumbers(3, 0, 9);
  player.average = generateRandomNumbers (1, 0, 50);
  player.percentage = generateRandomNumbers (1, 0, 100);

}

console.log(team);