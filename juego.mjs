import Player from "./modul/player.mjs";

import Baraja from "./modul/baraja.mjs";



function juego (playersnum){

    console.log('Iniciamos juego...');

    let baraja = new Baraja();
    console.log(baraja.randomCard());

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
    
    const  triunfo = baraja.randomCard;
    let tapate = [];

    let player1Array =[];
    let player2Array =[];

    let puntuacion1;
    let puntuacion2;

    player1.estado

}






export { juego };