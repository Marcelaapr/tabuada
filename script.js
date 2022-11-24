function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) { //Se o número tiver vazio:
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //convertendo em número.
        let c = 1
        tab.innerHTML = ''//Antes de começar a próxima tab, eu limpo o espaço.
        while (c <= 10) {
            let item = document.createElement('option')//criando o option do html.
            item.text = `${n} x ${c} = ${n*c}`// Parte de dentro do option.
            item.valuee = `tab${c}`//Faz a seleção do item na tabuada.
            tab.appendChild(item) // Adicionando o item à tabuada.
            c++
        }
    }
}