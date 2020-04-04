import Player from "./modul/player.mjs";

import Baraja from "./modul/baraja.mjs";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }








function juego (playersnum){

    console.log('Iniciamos juego...');

    let baraja = new Baraja();
    

    if (playersnum==='dos\n'||playersnum==='2\n'){
        let player1 = new Player ();
        let player2 = new Player ();


        juego2(player1,player2,baraja);
       // console.log(player1);
    }else {
        let player1 = new Player ();
        let player2 = new Player ();
        let player3 = new Player ();
        let player4 = new Player ();

        juego4();
      //  console.log(player3);
    }
    
    


}


function juego2(player1,player2,baraja){
    
    const  triunfo = baraja.randomCard();
    console.log('TRIUNFO:'+triunfo);
    let tapete = [];

    let player1Array =[];
    let player2Array =[];

    let puntuacion1;
    let puntuacion2;

    player1.puntos = 0;
    player2.puntos=0;

    let prova=0;
    while (prova<3){
    console.log('Puntuación jugador 1: '+ player1.puntos);
    console.log('Puntuación jugador 2: '+ player2.puntos);

    player1.estado=[baraja.randomCard(),baraja.randomCard(),baraja.randomCard()];
    console.log('Cartas que recibe jugador 1: ' + player1.estado);

    player2.estado=[baraja.randomCard(),baraja.randomCard(),baraja.randomCard()];
    console.log('Cartas que recibe jugador 1: ' + player2.estado);

    tapete= [player1.estado[getRandomInt(3)],player2.estado[getRandomInt(3)]];
    console.log('Tapete actual: '+tapete);

    if (tapete[0].palo===triunfo.palo){
        console.log('jugador 1 se queda tapete');
        player1Array.push(tapete[0]);
        player1Array.push(tapete[1]);
        console.log('array1:'+player1Array);

    }else if(tapete[1].palo===triunfo.palo){
        console.log('jugador 2 se queda tapete');
        player2Array.push(tapete[0]);
        player2Array.push(tapete[1]);
        console.log('array2:'+player2Array);
    }

    if(tapete[0].palo===tapete[1].palo){
        if(tapete[0].numero>tapete[1].numero){
            console.log('jugador 1 se queda tapete');
            player1Array.push(tapete[0]);
            player1Array.push(tapete[1]);
            console.log('array1:'+player1Array);
        }
    }
 
    prova++;
    }
}






export { juego };