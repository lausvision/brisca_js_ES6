

import { juego } from "./juego.mjs";




// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("¡Hola! Este es el juego de la Brisca :)");
console.log("¿vais a ser dos jugadores?(y/n)");
console.log("Salir del juego (e) ");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if(data === 'e\n'|| data=== 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else if (data==='y\n' || data=== 'yes\n'|| data=== 'Y\n')
    {
        // Print user input in console.
        console.log('EMPECEMOS ^-^ ');
        juego(data);

    }else{
        console.log('si no sois dos, cread grupos para ser dos equipos');
    }
});

