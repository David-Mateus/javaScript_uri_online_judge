var N = parseInt(lines.shift());
while(N>0){
    var line = lines.shift().split(" ");
    var x = parseFloat(line[0]);
    var y = parseFloat(line[1]);
    var z = parseFloat(line[2]);

var total = ((x * 2) + (y*3)+ (z*5))/10;
console.log(total.toFixed(1))
N-=1;
}