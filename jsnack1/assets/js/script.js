var arrZucchine = [
  {
    varietà: 'zucchino nero di Milano',
    peso: 300,
    lunghezza: 15
  },
  {
    varietà: 'zucchino romanesco',
    peso: 180,
    lunghezza: 12
  },
  {
    varietà: 'zucchino ortolano di Faenza',
    peso: 400,
    lunghezza: 18
  },
  {
    varietà: 'zucchino lunga fiorentina',
    peso: 250,
    lunghezza: 20
  },
  {
    varietà: 'zucchino striata di Napoli',
    peso: 280,
    lunghezza: 16
  },
  {
    varietà: 'zucchino bianca triestina',
    peso: 220,
    lunghezza: 11
  },
  {
    varietà: 'zucchino tondo di Piacenza',
    peso: 450,
    lunghezza: 10
  },
  {
    varietà: 'zucchino tond0 di Nizza',
    peso: 350,
    lunghezza: 9
  },
  {
    varietà: 'zucchina trombetta di Albenga',
    peso: 320,
    lunghezza: 23
  },
  {
    varietà: 'zucchino giallo',
    peso: 230,
    lunghezza: 13
  } 
]

$(document).ready(function() {

  var totPeso = 0;

  for (var i=0; i < arrZucchine.length; i++) {

    totPeso += arrZucchine[i].peso;

  }

  console.log('Il peso totale è: ' + totPeso);

});