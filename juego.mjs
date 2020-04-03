import Player from "./modul/player.mjs";
import {volverCartaRandom} from "./modul/cartaRandom.mjs";
import Carta from "./carta.mjs";



function juego (playersnum){

    console.log('Iniciamos juego...');

 

    if (playersnum==='dos\n'||playersnum==='2\n'){
        let player1 = new Player ('jugador1',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );
        let player2 = new Player ('jugador2',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );


        juego2(player1,player2);
       // console.log(player1);
    }else {
        let player1 = new Player ('jugador1',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );
        let player2 = new Player ('jugador2',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );
        let player3 = new Player ('jugador3',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );
        let player4 = new Player ('jugador4',0,[volverCartaRandom(),volverCartaRandom(),volverCartaRandom()] );

        juego4();
      //  console.log(player3);
    }
    
    


}


function juego2(player1,player2){
    
    const  triunfo = volverCartaRandom();
    let tapate = [];

    let player1Array =[];
    let player2Array =[];

    let puntuacion1;
    let puntuacion2;

    player1.estado

}








export { juego };