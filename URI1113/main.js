var i =1;
while(i > 0){
    var line = lines.shift().split(" ");
    var X = parseInt(line[0]);
    var Y= parseInt(line[1]);

    if(X>Y){
        console.log("Decrescente");
        i++;
    }else if(X<Y){
        console.log("Crescente");
        i++;
    }else{
        break;
    }
}

