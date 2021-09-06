var N = parseInt(lines.shift().split());
while(N>0){
    let line = lines.shift().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    var total = X/Y
    if( Y === 0){
        console.log("divisao impossivel")
        
    }else{
        console.log(total.toFixed(1))
    }
    N-=1
}