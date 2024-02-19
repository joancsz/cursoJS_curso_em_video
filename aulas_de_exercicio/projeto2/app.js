function calcula(){
    var ano = document.getElementById('ano');
    var ano_atual = Number(new Date().getFullYear());

    if (ano.value.length == 0 || ano > ano_atual){
        window.alert('Verifique os dados e tente novamente!')
    }
    var res = document.getElementById('res');
    var fsex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    img.setAttribute('id', 'img')

    var idade = ano_atual - Number(ano.value)
    var genero = ''
    var pessoa = ''
    var title = ''
    var preposicao = ''
    
    if (fsex[0].checked){
        genero = 'masc'
    }else{
        genero = 'fem'
    }
    
    if (idade<12){
        pessoa = 'crianca'
        title = 'Criança'
        preposicao = 'uma'
    } else if (idade >= 12 && idade < 24){
        pessoa = 'jovem'
        title = 'Jovem'
        preposicao = genero == 'masc'? 'um': 'uma' 
    } else if (idade >= 24 && idade < 50){
        pessoa = 'adulto'
        title = genero == 'masc'? 'Adulto': 'Adulta'
        preposicao = genero == 'masc'? 'um': 'uma' 
    } else {
        pessoa = 'idoso'
        title = genero == 'masc'? 'Idoso': 'Idosa'
        preposicao = genero == 'masc'? 'um': 'uma'  
    }

    imagem = `${pessoa}_${genero}.jpg`
    texto = `Foi detectado ${preposicao} ${title} de ${idade} anos`

    res.style.textAlign = 'center'
    res.innerHTML = texto
    img.setAttribute('src',imagem)
    res.appendChild(img)
}