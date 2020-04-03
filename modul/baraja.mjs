import Carta from "./carta.mjs";

export default class Baraja {
  constructor() {
    this.baraja = [];

    for (let palo of ["oros", "copas", "espadas", "bastos"]) {
      for (let carta of ["as", "dos","tres","cuatro","cinco","seis","siete","rey","caballo","sota"]) {
        this.baraja.push(new Carta(carta, palo));
      }
    }

  }

  randomCard(){
     
   let randomNum= Math.floor(Math.random()*this.baraja.length);

   let cartaRandom = this.baraja[randomNum];
   this.baraja.splice(randomNum,1);
   
   
   return cartaRandom;
  }

  mezclar(){


  }
}


