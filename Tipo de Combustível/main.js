

var N = prompt("Entrada")
let alc = 0;
let gaso = 0;
let die = 0;

while(N>0){
  let code = parseInt(lines.shift().split());
  
  switch (code) {
    case 1:
      alc++
      break;
    case 2:
      gaso++
      break;
    case 3:
      die++
      break;
    case 4:
      break;

      
    }
    console.log("MUITO OBRIGADO");
    console.log("Alcool: " + alcohol);
    console.log("Gasolina: " + gaso);
    console.log("Diesel: " + die);
    N-=1;
}

var N = parseInt(lines.shift().split())
let alc = 0;
let gaso = 0;
let die = 0;
let x = true;


while(x){
  let code = parseInt(lines.shift().split());
  
  switch (code) {
    case 1:
      alc++
      break;
    case 2:
      gaso++
      break;
    case 3:
      die++
      break;
    case 4:
      x=false
      break;

      
    }
    console.log("MUITO OBRIGADO");
    console.log("Alcool: " + alc);
    console.log("Gasolina: " + gaso);
    console.log("Diesel: " + die);
    N-=1;
}

