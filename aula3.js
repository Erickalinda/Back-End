let lanches = ["hamburgurer cheddar em dobro","hot Dog", "hamburguer bacon em dobro", "Haburguer vegano", "hamburguer 3 carnes de costela"]
let valores = [30, 22, 32, 28, 42]


function mostracardapio() {
    console.log("### cardapio ###")
    contador = 0;
    while(contador < lanches.length){
        let c2 = contador + 1 
        console.log(c2 + "-" + lanches[contador] + " R$ " + valores [contador])
        contador = contador + 1
    }
}
function adicionalanches(nome, preco){
    lanches.push(nome);
    valores.push(preco);
}


function mostracardapioespecial() {
    let valoresatualizados = valores.map((valor) => valor - (valor*0.15));
    console.log("### cardapioespecial ###")
    contador = 0;
    while(contador < lanches.length){
        let c2 = contador + 1 
        console.log(c2 + "-" + lanches[contador] + " R$ " + valoresatualizados [contador])
        contador = contador + 1
    }
}

mostracardapio();
adicionalanches("hamburguer cheddar em dobro", 30 );
mostracardapio()

mostracardapioespecial();



