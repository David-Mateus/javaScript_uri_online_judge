let entrada = parseInt(lines.shift());
while(entrada>0){
    let dados = parseInt(lines.shift());
    if(dados <=8000){
        console.log("Inseto!")
    }else{
        console.log("Mais de 8000!")
    }
    entrada-=1;
}