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

  var corteZucchine = [];
  var lungheZucchine = [];
  var cortePeso = 0;
  var lunghePeso = 0;

  for (var i=0; i < arrZucchine.length; i++) {

    if (arrZucchine[i].lunghezza <= 15) {
      corteZucchine.push(arrZucchine[i]);
      cortePeso += arrZucchine[i].peso;
    } else {
      lungheZucchine.push(arrZucchine[i]);
      lunghePeso += arrZucchine[i].peso;
    }

  }

  console.log('Le zucchine inferiori o uguali a 15cm pesano: ' + cortePeso + 'g');
  console.log('Le zucchine superiori a 15cm pesano: ' + lunghePeso + 'g');

});