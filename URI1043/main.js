var line = lines.shift().split(" ");
var A = parseFloat(line[0]);
var B = parseFloat(line[1]);
var C = parseFloat(line[2]);
if((A+B > C) && (B+C > A) && (C+A > B)){
    let perimetro = A+B+C;
    console.log("Perimetro = "+perimetro.toFixed(1))

}else{
    let area = ((A+B)*C)/2
    console.log("Area = "+area.toFixed(1))
}



// Para valores de mesma linha no URI  é preciso usar
// var line = lines.shift().split(" ")

