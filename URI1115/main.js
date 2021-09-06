var i = 1;
while(i > 0){
    let line = lines.shift().split(" ");
    let x = parseInt(line[0]);
    let y = parseInt(line[1]);

    if(x>0 && y>0 ){
        console.log("primeiro")
    }
    else if(x<0 && y >0){
        console.log("segundo")
    }
    else if(x<0 && y<0){
        console.log("terceiro")
    }
    else if(x>0 && y<0){
        console.log("quarto")
    }else{
        break;
    }

}