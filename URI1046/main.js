var line = lines.shift().split(" ")
var inicial = parseInt(line[0]);
var final = parseInt(line[1]);
if(inicial>final){
    var hrs1 = (24-(inicial - final));
    console.log("O JOGO DUROU "+hrs1+" HORA(S)");
}else if(final > inicial){
    let hrs =(24 + (final - inicial - 24 ));
    console.log("O JOGO DUROU "+hrs+" HORA(S)");
}else{
    console.log("O JOGO DUROU 24 HORA(S)")
}