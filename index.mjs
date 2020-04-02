
import Player from "./modul/player.mjs";
import volverCartaRandom from "./modul/cartaRandom.mjs";
let CartaRandom = new volverCartaRandom();



// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("¡Hola! Este es el juego de la Brisca :)");
console.log("¿cuantos jugadores vais a ser? ¿dos o cuatro?");
console.log("Si quieres pausar el juego escribe: exit.");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if(data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else if (data==='dos\n' || data=== 'cuatro\n' || data==='2\n' || data=== '4\n')
    {
        // Print user input in console.
        console.log('Tenemos : ' + data + ' jugadores   ^-^ ');
        EstadoBrisca(data);

    }else{
        console.log('numero de jugadores no valido');
    }
});

function EstadoBrisca(playersnum){

    console.log('Iniciamos juego...');

    if (playersnum==='dos\n'||playersnum==='2\n'){
        let player1 = new Player ('jugador1',0,[CartaRandom,CartaRandom,CartaRandom] );
        console.log(player1);
    }else {
        let player1 = new Player ('jugador1',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );
        console.log(player1);
    }

}