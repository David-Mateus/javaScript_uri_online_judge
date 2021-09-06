var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var numeroA = parseInt(line[0]);
var numeroB = parseInt(line[1]);
if(numeroA%numeroB === 0 || numeroB%numeroA ===0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}


