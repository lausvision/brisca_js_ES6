

function volverCartaRandom() {


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
    
    let cartaRandom= new Carta (numeroArray[randomNumber], palosArray[randomNumberPalos]);
    
    return cartaRandom;
    
    } 
    
    console.log(volverCartaRandom());
    
    export { volverCartaRandom };
    