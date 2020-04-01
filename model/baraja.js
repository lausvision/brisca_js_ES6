
import Carta from "./carta.js";

/*
export const valor = {
    as:  11,
    dos: null,
    tres: 10,
    cuatro:null,
    cinco: null,
    seis: null,
    siete: null,
    sota: 2,
    caballo:3,
    rey:4
     
};*/

export default class Baraja{

 constructor(){

    this.as_oros= new Carta('as', 'oros');
    this.dos_oros= new Carta('2', 'oros');
    this.tres_oros= new Carta('3', 'oros');
    this.cuatro_oros= new Carta('4', 'oros');
    this.cinco_oros= new Carta('5', 'oros');
    this.seis_oros= new Carta('6', 'oros');
    this.siete_oros= new Carta('7', 'oros');
    this.sota_oros= new Carta('sota', 'oros');
    this.caballo_oros= new Carta('caballo', 'oros');
    this.rey_oros= new Carta('rey', 'oros');

    this.as_copas= new Carta('as', 'copas');
    this.dos_copas= new Carta('2', 'copas');
    this.tres_copas= new Carta('3', 'copas');
    this.cuatro_copas= new Carta('4', 'copas');
    this.cinco_copas= new Carta('5', 'copas');
    this.seis_copas= new Carta('6', 'copas');
    this.siete_copas= new Carta('7', 'copas');
    this.sota_copas= new Carta('sota', 'copas');
    this.caballo_copas= new Carta('caballo', 'copas');
    this.rey_copas= new Carta('rey', 'copas');

    this.as_espadas= new Carta('as', 'espadas');
    this.dos_espadas= new Carta('2', 'espadas');
    this.tres_espadas= new Carta('3', 'espadas');
    this.cuatro_espadas= new Carta('4', 'espadas');
    this.cinco_espadas= new Carta('5', 'espadas');
    this.seis_espadas= new Carta('6', 'espadas');
    this.siete_espadas= new Carta('7', 'espadas');
    this.sota_espadas= new Carta('sota', 'espadas');
    this.caballo_espadas= new Carta('caballo', 'espadas');
    this.rey_espadas= new Carta('rey', 'espadas');

    this.as_bastos= new Carta('as', 'bastos');
    this.dos_bastos= new Carta('2', 'bastos');
    this.tres_bastos= new Carta('3', 'bastos');
    this.cuatro_bastos= new Carta('4', 'bastos');
    this.cinco_bastos= new Carta('5', 'bastos');
    this.seis_bastos= new Carta('6', 'bastos');
    this.siete_bastos= new Carta('7', 'bastos');
    this.sota_bastos= new Carta('sota', 'bastos');
    this.caballo_bastos= new Carta('caballo', 'bastos');
    this.rey_bastos= new Carta('rey', 'bastos');
 }


}

let palosArray = [
    'oros',
    'copas',
    'espadas',
    'bastos'
];

let numeroArray=[
    'as',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    'sota',
    'caballo',
    'rey'
];

let randomNumberPalos = Math.floor(Math.random()*palosArray.length);

let randomNumber = Math.floor(Math.random()*numeroArray.length);

Carta (numeroArray[randomNumber], palosArray[randomNumberPalos]);