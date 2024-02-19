function contar(){
    let inicio = window.document.getElementById('inicio'); // Fora deste bloco variáveis declaradas com let não são acessíveis
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let res = document.getElementById("res");
    
    if (fim.value.length == 0){
        window.alert('Erro digite algum valor de fim')
        return
    }

    const f = Number(fim.value) //Não acessíveis fora do bloco e imutáveis

    if (inicio.value.length == 0){
        window.alert('Nenhum valor digitado, utilizando o início como 0')
        var i = 0 // Acessíveis fora do contexto do bloco
    } else{
        var i = Number(inicio.value)
    }

    if (passo.value.length == 0){
        window.alert('Nenhum valor digitado, utilizando o passo como 1')
        if (f > i){
            var p = 1
        }else{
            var p = -1
        }
    } else{
        var p = f > i? Number(passo.value): -Number(passo.value)
    }

    let msg = `🏁${i}👉`
    i += p
    if (f > i){
        for (i; i <= f; i += p){
            msg += `${i} 👉`
        }
    } else{
        for (i; i >= f; i += p){
            msg += `${i} 👉`
        }
    }
    
    msg += `🏆`
    res.innerHTML = msg

}