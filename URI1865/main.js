let i = parseInt(lines.shift());
while(i>0){
    let line = lines.shift().split(' ');
    let X = (line[0]);
    let C = parseInt(line[1]);
    if(X === 'Thor'){
        console.log("Y");
    }else{
        console.log("N");
    }
    i-=1;
}
