import Carta from "./carta.mjs";

function volverCartaRandom() {

    let as_oros= new Carta('as', 'oros');
    let dos_oros= new Carta('2', 'oros');
    let tres_oros= new Carta('3', 'oros');
    let cuatro_oros= new Carta('4', 'oros');
    let cinco_oros= new Carta('5', 'oros');
    let seis_oros= new Carta('6', 'oros');
    let siete_oros= new Carta('7', 'oros');
    let sota_oros= new Carta('sota', 'oros');
    let caballo_oros= new Carta('caballo', 'oros');
    let rey_oros= new Carta('rey', 'oros');

    let as_copas= new Carta('as', 'copas');
    let dos_copas= new Carta('2', 'copas');
    let tres_copas= new Carta('3', 'copas');
    let cuatro_copas= new Carta('4', 'copas');
    let cinco_copas= new Carta('5', 'copas');
    let seis_copas= new Carta('6', 'copas');
    let siete_copas= new Carta('7', 'copas');
    let sota_copas= new Carta('sota', 'copas');
    let caballo_copas= new Carta('caballo', 'copas');
    let rey_copas= new Carta('rey', 'copas');

    let as_espadas= new Carta('as', 'espadas');
    let dos_espadas= new Carta('2', 'espadas');
    let tres_espadas= new Carta('3', 'espadas');
    let cuatro_espadas= new Carta('4', 'espadas');
    let cinco_espadas= new Carta('5', 'espadas');
    let seis_espadas= new Carta('6', 'espadas');
    let siete_espadas= new Carta('7', 'espadas');
    let sota_espadas= new Carta('sota', 'espadas');
    let caballo_espadas= new Carta('caballo', 'espadas');
    let rey_espadas= new Carta('rey', 'espadas');

    let as_bastos= new Carta('as', 'bastos');
    let dos_bastos= new Carta('2', 'bastos');
    let tres_bastos= new Carta('3', 'bastos');
    let cuatro_bastos= new Carta('4', 'bastos');
    let cinco_bastos= new Carta('5', 'bastos');
    let seis_bastos= new Carta('6', 'bastos');
    let siete_bastos= new Carta('7', 'bastos');
    let sota_bastos= new Carta('sota', 'bastos');
    let caballo_bastos= new Carta('caballo', 'bastos');
    let rey_bastos= new Carta('rey', 'bastos');

    let barajaArray=[
    as_oros,
    dos_oros,
    tres_oros, 
    cuatro_oros, 
    cinco_oros ,
    seis_oros ,
    siete_oros ,
    sota_oros,
    caballo_oros,
    rey_oros,

    as_copas ,
    dos_copas ,
    tres_copas ,
    cuatro_copas ,
    cinco_copas ,
    seis_copas ,
    siete_copas ,
    sota_copas ,
    caballo_copas,
    rey_copas ,

    as_espadas,
    dos_espadas ,
    tres_espadas ,
    cuatro_espadas,
    cinco_espadas,
    seis_espadas,
    siete_espadas,
    sota_espadas,
    caballo_espadas,
    rey_espadas,

    as_bastos,
    dos_bastos,
    tres_bastos,
    cuatro_bastos,
    cinco_bastos,
    seis_bastos,
    siete_bastos,
    sota_bastos,
    caballo_bastos,
    rey_bastos
    ];

    /*

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
    */
    
   
    let randomNum= Math.floor(Math.random()*barajaArray.length);

    let cartaRandom = barajaArray[randomNum];
    barajaArray.splice(randomNum,1);
    
    
    return cartaRandom;
    
    } 
    
    console.log(volverCartaRandom());
    
    export { volverCartaRandom };
    