function gera(){
    let base = window.document.getElementById('base')
    let res = window.document.getElementById('tabuada')
    let num = Number(base.value)
    res.innerHTML = ''

    for (let i=1; i <= 10; i++){
        let opt = document.createElement('option')
        opt.textContent = `${num} x ${i} = ${i*num}`
        res.appendChild(opt)
    }
}