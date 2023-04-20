'use strict'

class card extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.imagem = null
        this.titulo = 'Titulo Produto'
        this.descricao = 'Descricao Produto'
        this.preco = 'R$0.0'
    }

    static get observedAttributes(){
        return [
            'imagem',
            'titulo', 
            'descricao', 
            'preco'
        ]
    }


    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const css = document.createElement('style')
        css.textContent = `
        
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 10px;
            cursor: pointer;
        }

        .card__image {
            width: 200px;
            height: 200px;
            object-fit: contain;
        }

        .card__title {
            font-size: 1rem;
            text-align: center;
        }

        .card__description {
            width: 290px;
            text-align: justify;
            font-size: 1rem;
        }

        .card__price {
            width: 100%;
            font-size: 1.2rem;
            font-weight: 900;
        }
        
        `

        return css
    }
    
    component(){
        const card = document.createElement('div')
        card.classList.add('card')

        const card__image = document.createElement('img')
        card__image.classList.add('card__image')
        card__image.src = this.imagem

        const card__title = document.createElement('h5')
        card__title.classList.add('card__title')
        card__title.textContent = this.titulo

        const card__description = document.createElement('p')
        card__description.classList.add('card__description')
        card__description.textContent = this.descricao

        const card__price = document.createElement('span')
        card__price.classList.add('card__price')
        card__price.textContent = this.preco

        card.append(card__image, card__title, card__description, card__price)

     
        return card
    }
}

customElements.define('card-produto', card)

