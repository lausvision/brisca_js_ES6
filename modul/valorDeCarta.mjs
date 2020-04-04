

function valorDeCarta(entero) {
    let points=0;

    if (entero === "as"){
        points=11;
    }else if(entero==="tres"){
        points=10;
    }else if(entero==="rey"){
        points=4;
    }else if(entero==="caballo"){
        points=3;
    }else if(entero==="sota"){
        points=2;
    }else{
        points=0;
    }


    return points;

}
    

export { valorDeCarta };
    