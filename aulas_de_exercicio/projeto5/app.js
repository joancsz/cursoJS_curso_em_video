var add_button = window.document.getElementById('add')
var final_button = window.document.getElementById('final')

var array = []

function add_number(){
    let res = window.document.getElementById('res')
    res.innerHTML = ''

    let num = window.document.getElementById('num')
    value = Number(num.value)
    if (value.length == 0 || isInvalidNumber(value) || isInArray(value)){
        window.alert('Entrada inválida, digite novamente')
        num.value = ''
        num.focus()
    } else{
        add_to_selection(value);
        array.push(value);
        num.value = ''
        num.focus()
    }
}

function isInvalidNumber(value){
    if (typeof(value)=="number"){
        if (value >= 1 && value <= 100){
            return false
        }else{
            return true
        }
    }else{
        return true
    }
}

function isInArray(value){
    if (array.includes(value)){
        return true
    } else{
        return false
    }
}

function add_to_selection(value){
    let opt = window.document.createElement('option')
    let sel = window.document.getElementById('sel')
    opt.textContent = `Valor ${value} adicionado`
    sel.appendChild(opt)
}

function show_results(){
    let res = window.document.getElementById('res')
    const len = array.length
    if (len == 0){
        window.alert('Ainda não há valores adicionados!')
        return
    }
    const max = array.reduce((max, current) => max > current ? max : current, -Infinity);
    const min = array.reduce((min, current) => min < current ? min : current, Infinity);
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const avg = sum/len

    res.innerHTML = `<p>Ao todo, temos ${len} números cadastrados <br></p>`
    res.innerHTML += `<p>O maior valor informado foi ${max}<br></p>`
    res.innerHTML += `<p>O menor valor informado foi ${min} <br></p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${sum}<br></p>`
    res.innerHTML += `<p>A média dos valores digitados é de ${avg}</p>`
}

function clean(){
    let sel = window.document.getElementById('sel')
    let opt = document.createElement('option')
    let res = window.document.getElementById('res')
    array = []
    res.innerHTML = ''
    sel.innerHTML = ''
    opt.textContent = `Digite algum número`
    sel.appendChild(opt)
}