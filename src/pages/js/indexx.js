let grupoA = grupos[6]

document.querySelector('.nomeGrupo').innerHTML = grupoA.grupo

let selecoes = document.querySelectorAll('.nomeSelecao')

for (let i = 0; i < selecoes.length; i++) {
    selecoes[i].innerHTML = grupoA.selecoes[i]
}



function tirarAcentos(texto) {
    texto = texto.replace(" ", "_")
    texto = texto.replace(" ", "_")
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

let outrasSelecoes = ["EUR", "PL1", "PL2", "eur", "pl1", "pl2" ]

for(let i = 0; i < bandeiras.length; i++) {
    let nome = tirarAcentos(grupoA.selecoes[i].toLowerCase())
    outrasSelecoes.includes(nome) ? nome = 'bandeira_padrao' : ''
    bandeiras[i].src = `./images/bandeiras/${nome}.svg`
}


// selecionar todas as selecoes que poderemos arrastar
document.querySelectorAll('.selecoes').forEach(selecao => {
    selecao.addEventListener('dragstart', dragStart)
    selecao.addEventListener('dragend', dragEnd)
})

// selecionar todas as areas que vao receber as selecoes
document.querySelectorAll('.selecaoClassificada').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

// chamar as funcoes correspondentes a cada metodo dragover, dragleave e drop
document.querySelector('.cardGrupo').addEventListener('dragover', dragOverNeutral)
document.querySelector('.cardGrupo').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.cardGrupo').addEventListener('drop', dropNeutral)

// Funcoes para saber qual selecao esta sendo arrastada
function dragStart(e) {
    e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}

// Funcoes relativas a selecao que esta sendo arrastada e area de destino
function dragOver(e) {
    if(e.currentTarget.querySelector('.selecoes') === null) {
        e.preventDefault()
        e.currentTarget.classList.add('hover')
    }
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}

function drop(e) {
    e.currentTarget.classList.remove('hover')

    if(e.currentTarget.querySelector('.selecoes') === null) {
        let dragItem = document.querySelector('.selecoes.dragging')
        e.currentTarget.appendChild(dragItem)
        lerEscolhas()
    }
}

// Funcoes relativas a area neutra, ou seja, area original onde estao as selecoes
function dragOverNeutral(e) {
    e.preventDefault()
    e.currentTarget.classList.add('hover')
}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.selecoes.dragging')
    e.currentTarget.appendChild(dragItem)
    lerEscolhas()
}

let escolhas = {
    a: null,
    b: null
}
function lerEscolhas() {
    let escolhidos = document.querySelectorAll('.selecaoClassificada')
    let primeiro = escolhidos[0].querySelector('.selecoes .nomeSelecao')
    let segundo  = escolhidos[1].querySelector('.selecoes .nomeSelecao')

    if(primeiro !== null) {
        escolhas.a = primeiro.innerHTML
        if(segundo !== null) {
            escolhas.b = segundo.innerHTML
        }
    }
    return escolhas
}

