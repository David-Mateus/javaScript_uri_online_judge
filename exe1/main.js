
let i = 0;
let nota = prompt("digite uma nota de 0 a 10");
while(nota > 0){
    if( nota >= 0 && nota <= 10){
    console.log(nota)
    break
}else if(nota == 0){
    break;
}else{
    nota = prompt("digite novamente")
}
}

    
