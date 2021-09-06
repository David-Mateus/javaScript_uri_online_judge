var T = parseInt(lines.shift().split());
var i = 0;
while(T > 0 ){
    var line = lines.shift().split(" ");
    var r1 = parseInt(line[0]);
    var r2 = parseInt(line[1]);
    var somar = r1 + r2;
    console.log(somar);
    T-=1;
}
let horas = parseInt(lines.shift());
var line = lines.shift().split(" ");
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let total = A + B;
if(total > horas){
    console.log("Deixa para amanha!")
}else{
    console.log("Farei hoje!")
}