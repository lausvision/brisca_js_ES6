

class Card{
    constructor(numero,palo){
        this.numero=numero;
        this.palo=palo;
    }
    toString() {
        return `${this.numero} (${this.palo})`;
      }
}



Card.palo = new Set([
    'oros',
    'copas',
    'espadas',
    'bastos'
]);

Card.numero = new Set([
   {num: 'as', valor: 11}, 
   {num: '2', valor: null}, 
   {num: '3', valor: 10}, 
   {num: '4', valor: null}, 
   {num: '5', valor: null}, 
   {num: '6', valor: null}, 
   {num: '7', valor: null}, 
   {num: 'sota', valor: 2}, 
   {num: 'caballo', valor: 3}, 
   {num: 'rey', valor: 4}, 
])