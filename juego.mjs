import Player from "./modul/player.mjs";

import Baraja from "./modul/baraja.mjs";

import {valorDeCarta} from "./modul/valorDeCarta.mjs";

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
       
    }else {
        let player1 = new Player ();
        let player2 = new Player ();
        let player3 = new Player ();
        let player4 = new Player ();

        juego4();
      
    }
    
    


}


function juego2(player1,player2,baraja){
    
    const  triunfo = baraja.randomCard();
    console.log('TRIUNFO:'+triunfo);
    let tapete = [];console.log(baraja);

    let player1Array =[];
    let player2Array =[];

   

    let puntos1=0;
    let puntos2=0;

    //variables para la eliminacion de las cartas del estado de los jugadores
    let x,y;


    //primeras tres cartas que se dan a los jugadores 1 y 2
    player1.estado=[baraja.randomCard(),baraja.randomCard(),baraja.randomCard()];
    console.log('Cartas que recibe jugador 1: ' + player1.estado);

    player2.estado=[baraja.randomCard(),baraja.randomCard(),baraja.randomCard()];
    console.log('Cartas que recibe jugador 2: ' + player2.estado);

    
   
    let prova=0;
    while (prova<17){
   

  
    //sacamos las cartas al tapete de juego de forma random de los dos jugadores
    tapete= [player1.estado[getRandomInt(3)],player2.estado[getRandomInt(3)]];
    console.log('Tapete actual: '+tapete);

    //quitamos las cartas del tapate del estado de los jugadores -> va bien
    x=player1.estado.findIndex(a=>a===tapete[0]);
    player1.estado.splice(x,1);
    console.log(player1.estado+ '   cartas que tiene 1');

    y=player2.estado.findIndex(b=>b===tapete[0]);
    player2.estado.splice(y,1);
    console.log(player2.estado+ '   cartas que tiene 2');

    


    if(tapete[0].palo===tapete[1].palo){
        if(valorDeCarta(tapete[0].numero)>valorDeCarta(tapete[1].numero)){
            console.log('jugador 1 se queda tapete');
            player1Array.push(tapete[0]);
            player1Array.push(tapete[1]);
            console.log('array1:'+player1Array);
        }else {
            console.log('jugador 2 se queda tapete');
            player2Array.push(tapete[0]);
            player2Array.push(tapete[1]);
            console.log('array1:'+player2Array);
        }
    }else{

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
        }else{

            let val1=valorDeCarta(tapete[0].numero);
            let val2=valorDeCarta(tapete[1].numero);

            if (val1>val2){
                console.log('jugador 1 se queda tapete');
                player1Array.push(tapete[0]);
                player1Array.push(tapete[1]);
                console.log('array1:'+player1Array);
            }else{
                console.log('jugador 2 se queda tapete');
                player2Array.push(tapete[0]);
                player2Array.push(tapete[1]);
                console.log('array2:'+player2Array);
            }

        }
    }

    //repartimos 1 carta mas a los jugadores ya que quedaron con 2
    player1.estado.push(baraja.randomCard());
    player2.estado.push(baraja.randomCard());



    
    
 
    prova++;
    }

    for (let i=0; i<player1Array.length;i++){

        puntos1=puntos1+valorDeCarta(player1Array[i].numero);
        player1.puntos=puntos1;
    }
    for (let z=0; z<player2Array.length;z++){

        puntos2=puntos2+valorDeCarta(player2Array[z].numero);
        player2.puntos=puntos2;
    }
    console.log('Puntuación jugador 1: '+ player1.puntos);
    console.log('Puntuación jugador 2: '+ player2.puntos);

    console.log(baraja);

}






export { juego };