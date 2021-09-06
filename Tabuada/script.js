function tabuada(){
var numero = document.getElementById("num").value;
var resp = document.getElementById("resp")
var tabuada='';
for(var count=1; count<=15; count++)
   tabuada += numero+ " x "+ count +" = " +( numero*count) +"<br >";
  resp.innerHTML = tabuada;

}