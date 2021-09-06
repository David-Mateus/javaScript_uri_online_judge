


for(var x = parseInt(lines.shift().split('')), a = parseInt(lines.shift().split(''));x < a;x++){
    if(x%5===2 || x%5===3){
        console.log(x)
    }

}
let x = prompt("")
let y = prompt("")
i = 0;

if(x>y){
    for(i = 0; i < x; i++){
        if(i%5===2 || i%5===3){
            console.log(i);
        }
    }
}
if(x<y){
    for(i = 0; i < y; i++){
        if(i%5===2 || i%5===3){
            console.log(i);
     }
    }
}
let soma = 0;
for( var x = prompt("entrada1"),a = prompt("entrada2"); x < a;x++){
    
    if(x%13!==0){
        soma++
        soma = soma + x
        console.log(soma)
    }

}
var X = prompt("")
var Y = prompt("")
var soma = 0;
if(X>Y){
    for(let i = Y; i <= X; i++){
        if(i%13!==0){
            soma+=i;
            console.log(soma)
        }else{
            for(let i = X; i <= Y; i++){
                if(i%13!==0){
                    soma +=i
                    console.log(soma)
                }
            }
            
        }
        
    }
}