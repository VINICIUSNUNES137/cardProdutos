'use strict'

import { produtos } from "./produtos.js"

// console.log(produtos[1])

const precos = [10, 23, 51, 90]
const criarCard = (produto) => {
    const card = document.createElement('card-produto')

    card.imagem = `./img/${produto.image}`
    card.titulo = produto.name
    card.descricao = produto.description
    card.preco = produto.price

    // card.classList.add('card')

    // const img = document.createElement('img')
    // img.classList.add('card__image')
    // img.src = `./img/${produto.image}`

    // const titulo = document.createElement('h5')
    // titulo.classList.add('card__title')
    // titulo.textContent = produto.name

    // const descricao = document.createElement('p')
    // descricao.classList.add('card__description')
    // descricao.textContent = produto.description

    // const preco = document.createElement('span')
    // preco.classList.add('card__price')
    // preco.textContent = produto.price

    // card.append(img, titulo, descricao, preco)

    return card
}
const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()


// const limite = precos.length
// const precosFrete = []
// for (let i = 0; i < limite; i++) {
//     precosFrete[i] = precos[i] + 2
// }

// console.log(precosFrete)
// const adicionaFrete = (preco) => preco + 2
// const precosFrete = precos.map(adicionaFrete)
// console.log(precosFrete)