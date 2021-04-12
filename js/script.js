/**
 * Descrizione
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

$(document).ready(function() {

    // References
    var numbers = [];
    var userNumbers = [];
    var equalNumbers = [];
    

    // Inclusione numeri random nell'array numbers
    for (var i = numbers.length; i < 5; i++) {
        var randomNum = getRandomNumber(1, 100);

        // Validazione e inclusione
        if (! numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    // Mostro i numeri generati casualmente con un alert()
    alert('Questi sono i numeri generati casualmente: ' + numbers);

    // Countdown di 30s

    // setup
    var seconds = 3;

    var countdown = setInterval(function() {
        if (seconds === 0) {

            // Interrompo il countdown
            clearInterval(countdown);

            // Inserimento dei numeri da parte dell'utente
            for (var i = 1; i <= 5; i++) {
                var num = parseInt( prompt('Inserisci il numero ' + i + ' di 5') );
                
                // Inserisco i numeri inseriti nell'array
                userNumbers.push(num);

                if (numbers.includes(num)) {
                    equalNumbers.push(num);
                }
            }

            // Stampo i numeri inseriti dall'utente
            console.log('I numeri inseriti dall\'utente sono: ', userNumbers);

            // Stampo i numeri uguali
            console.log('I numeri uguali sono: ', equalNumbers);

            // Esito dell'inserimento
            switch (equalNumbers.length) {
                case 1:
                    console.log('Complimenti, hai azzeccato un numero, ed è: ' + equalNumbers);
                    break;
                case 2:
                    console.log('Complimenti, hai azzeccato due numeri, e sono: ' + equalNumbers);
                    break;
                case 3:
                    console.log('Complimenti, hai azzeccato tre numeri, e sono: ' + equalNumbers);
                    break;
                case 4:
                    console.log('Complimenti, hai azzeccato quattro numeri, e sono: ' + equalNumbers);
                    break;
                case 5:
                    console.log('Complimenti, hai azzeccato tutti numeri!!! I numeri sono: ' + equalNumbers);
                    break;
                default:
                    console.log('Aaaw, non hai inserito nessun numero uguale :(');
            }

        } else {
            // Stampo i secondi del countdown e decremento i secondi
            console.log(seconds);
            seconds--;
        }


    }, 1000)


    // End doc ready
});

/*************************************************
 * FUNCTIONS
 *************************************************/

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}