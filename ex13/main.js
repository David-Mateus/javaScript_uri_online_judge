var vfinal = 0;
while(x!=0){
    var x = prompt("100-Cachorro Quente, 101-Bauru simples, 102-Bauru com ovo, 103-Hamburguer, 104-cheese, 105-refrigerante")

    if(x==0){
        console.log("Preço a pagar: " +vfinal)
    }
    else{
        var y = parseInt(prompt("Diga sua escolha"))
        switch(x){
            case "100":
                vfinal = vfinal + (1.20 * y)
                break;
                case"101":
                vfinal = vfinal+(1.30*y)
                break;
                case"102":
                vfinal = vfinal+(1.50*y)
                break;
                case"103":
                vfinal = vfinal+(1.20*y)
                break;
                case"104":
                vfinal = vfinal+(1.30*y)
                break;
                case"105":
                vfinal = vfinal+(1.00*y)
                break;

        }

    }
}

