var team = ['ferrari', 'mercedes', 'williams', 'mclaren', 'red bull'];
var piloti = ['leclerc', 'hamilton', 'russell', 'ricciardo', 'verstappen', 'vettel', 'alonso'];

if (team.length < piloti.length) limit = team.length
else limit = piloti.length

var merge = [];
var c=0

for (var i=0; i<limit*2; i++) {

  if (i%2 == 0) {
    merge.push(team[c]);
  }
  else {
    merge.push(piloti[c]);
    c++;
  }
  
  console.log(merge);

}