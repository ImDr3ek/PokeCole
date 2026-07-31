let inputNome = document.getElementById("input-nome")
function testar(){
    carregarDados()

    estoque = [

        {
            nome: "Pikachu",
            tipo: "Eletrico",
            valor: 120,
            shiny: "Sim",
            debilidade: "Terra",
            id: Date.now()
        },
        {
            nome: "Charizard",
            tipo: "Fogo",
            valor: 500,
            shiny: "Nao",
            debilidade: "Agua",
            id: Date.now() + 1
        },
        {
            nome: "Bulbasaur",
            tipo: "Planta",
            valor: 80,
            shiny: "Sim",
            debilidade: "Fogo",
            id: Date.now() + 2
        },
        {
            nome: "Squirtle",
            tipo: "Agua",
            valor: 90,
            shiny: "Nao",
            debilidade: "Eletrico",
            id: Date.now() + 3
        }
    ]
    salvarDados()
    mostrarEstoque()
    resetarInputs()
    console.log(estoque)

}
let inputTipo = document.getElementById("input-tipo")
let inputValor = document.getElementById("input-valor")
let inputShiny = document.getElementById("input-shiny")
let inputDebilidade = document.getElementById("input-debilidade")
let inputId = document.getElementById("input-id")

let estoque = []

carregarDados()
mostrarEstoque()


function AdicionarProduto(){

    carregarDados()

    let novoPokemon = {

        nome: inputNome.value,
        tipo: inputTipo.value,
        valor: Number(inputValor.value),
        shiny: inputShiny.value,
        debilidade: inputDebilidade.value,
        id: Date.now()

    }

    estoque.push(novoPokemon)
    salvarDados()
    mostrarEstoque()
    resetarInputs()
    console.log(novoPokemon)

}

function removerProduto(){

    carregarDados()
    let pokemon = Number(inputId.value)

    for(let i = 0; i < estoque.length; i++){

        if(pokemon == estoque[i].id){
         estoque.splice(i, 1)

        }
    }

    salvarDados()
    mostrarEstoque()
    resetarInputs()
    console.log(pokemon)

}

function procurarProduto(){

    carregarDados()
    let pokemon = inputNome.value

    for(let i = 0; i < estoque.length; i++){
        if(pokemon == estoque[i].nome){

            inputTipo.value = estoque[i].tipo
            inputValor.value = estoque[i].valor
            inputShiny.value = estoque[i].shiny
            inputDebilidade.value = estoque[i].debilidade
            inputId.value = estoque[i].id

        }
    }
}

function atualizarProduto(){
    carregarDados()
    let pokemon = Number(inputId.value)

    for(let i = 0; i < estoque.length; i++){
        if(pokemon == estoque[i].id){
            estoque[i].nome = inputNome.value
            estoque[i].tipo = inputTipo.value
            estoque[i].valor = inputValor.value
            estoque[i].shiny = inputShiny.value
            estoque[i].debilidade = inputDebilidade.value

        }
    }

    salvarDados()
    mostrarEstoque()
    resetarInputs()

}

function resetarInputs(){

    inputNome.value = ""
    inputTipo.value = ""
    inputValor.value = ""
    inputShiny.value = ""
    inputDebilidade.value = ""
    inputId.value = ""
    inputNome.focus()
}

function mostrarEstoque(){

    let lista = document.getElementById("lista")
    lista.innerHTML = ""

    for(let i = 0; i < estoque.length; i++){

        lista.innerHTML +=
        "<div class='card-produto'>" +
        "<h3>Nome: " + estoque[i].nome + "</h3>" +
        "<p>Tipo: " + estoque[i].tipo + "</p>" +
        "<p>Valor: " + estoque[i].valor + " R$</p>" +
        "<p>Shiny?: " + estoque[i].shiny + "</p>" +
        "<p>Debilidade: " + estoque[i].debilidade + "</p>" +
        "<p>ID: " + estoque[i].id + "</p>" +
        "</div>"


    }
}


function salvarDados(){
localStorage.setItem("estoque", JSON.stringify(estoque))

}

function carregarDados(){
    estoque = JSON.parse(localStorage.getItem("estoque")) || []

}

inputNome.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputTipo.focus()
    }
})
inputTipo.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputValor.focus()
    }
})
inputValor.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputShiny.focus()
    }
})
inputShiny.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputDebilidade.focus()
    }
})
inputDebilidade.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        AdicionarProduto()
    }
})

console.log(estoque)