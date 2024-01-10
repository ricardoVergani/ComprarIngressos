function comprar(){
    let tipo = document.getElementById("tipo-ingresso")
    let qtd = parseInt(document.getElementById("qtd").value)

    if (tipo.value == "pista") {
        comprarPista(qtd)
    } else if (tipo.value == "superior") {
        comprarSuperior(qtd)
    } else {
        comprarInferior(qtd)
    }
}

function comprarPista(qtd) {
    if (qtd >= 1){
        let qtdPista = parseInt(document.getElementById("qtd-pista").textContent)
        if(qtd > qtdPista){
            alert("Quantidade insiponível")
        } else {
            qtdPista = qtdPista - qtd
            document.getElementById("qtd-pista").textContent = qtdPista
            alert("Compra realizada!")
        }
    } else {
        alert("Escolha a quantidade")
    }
}


function comprarSuperior(qtd) {
    if(qtd >= 1){
        let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent)
        if(qtd > qtdSuperior){
            alert("Quantidade insiponível")
        } else {
            qtdSuperior = qtdSuperior - qtd
            document.getElementById("qtd-superior").textContent = qtdSuperior
            alert("Compra realizada!")
        }
    } else {
        alert("Escolha a quantidade")
    }
}



function comprarInferior(qtd) {
    if(qtd >= 1){
        let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent)
        if(qtd > qtdInferior){
            alert("Quantidade indisponível")
        } else {
            qtdInferior = qtdInferior - qtd
            document.getElementById("qtd-inferior").textContent = qtdInferior   
            alert("Compra realizada!")
        }
    } else {
        alert("Escolha a quantidade")
    }
}
