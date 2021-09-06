var vfinal = 0;
while(x!=0){
    var x = prompt("Escolhe entre as opçoes 100-Cachorro Quente, 101-Bauru simples, 102-Bauru com ovo, 103-hamburguer, 104-Cheeseburguer, 105- Refrigerante. Digite 0 para encerrar o pedido")
    if(x==0){
        console.log("O valor total do pedido é " +vfinal);
    }
    else{
        var y= prompt("Quantos você deseja?")
        switch(x)
        {
        case "100":
        vfinal = vfinal+(1.70*y);
        break;
        case "101":
        vfinal = vfinal+(2.30*y);
        break;
        case "102":
        vfinal = vfinal+(2.60*y);
        break;
        case "103":
        vfinal = vfinal+(2.40*y);
        break;
        case "104":
        vfinal = vfinal+(2.50*y);
        break;
        case "105":
        vfinal = vfinal+(1.00*y);
        break;

        }
    }
}
