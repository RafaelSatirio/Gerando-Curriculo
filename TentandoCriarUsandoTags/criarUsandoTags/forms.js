let tags = ['div', 'div','form','label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'label', 'input', 'button']
let listaTags = []
let body = document.querySelector('body')

//criei as 3 tags: div, label e input
tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

listaTags[3].textContent = "Nome:"
listaTags[5].textContent = "Data de Nascimento:"
listaTags[7].textContent = "Escolaridade:"
listaTags[9].textContent = "Curso:"
listaTags[11].textContent = "Email:"
listaTags[13].textContent = "Experiência:"
listaTags[15].textContent = "Habilidades 1:"
listaTags[17].textContent = "Habilidades 2:"
listaTags[19].textContent = "Habilidades 3:"
listaTags[21].textContent = "Site:"
listaTags[23].textContent = "Endereço:"
listaTags[25].textContent = "Sobre Mim:"
listaTags[27].textContent = "Idiomas:"
listaTags[29].textContent = "Enviar"

/*listaTags[16].textContent = "Enviar"*/

//adicionei a div no DOM
body.appendChild(listaTags[0])

//incluindo na div a tag img e a label
listaTags[0].appendChild(listaTags[1])
listaTags[1].appendChild(listaTags[2])
listaTags[2].appendChild(listaTags[3])
listaTags[2].appendChild(listaTags[4])
listaTags[2].appendChild(listaTags[5])
listaTags[2].appendChild(listaTags[6])
listaTags[2].appendChild(listaTags[7])
listaTags[2].appendChild(listaTags[8])
listaTags[2].appendChild(listaTags[9])
listaTags[2].appendChild(listaTags[10])
listaTags[2].appendChild(listaTags[11])
listaTags[2].appendChild(listaTags[12])
listaTags[2].appendChild(listaTags[13])
listaTags[2].appendChild(listaTags[14])
listaTags[2].appendChild(listaTags[15])
listaTags[2].appendChild(listaTags[16])
listaTags[2].appendChild(listaTags[17])
listaTags[2].appendChild(listaTags[18])
listaTags[2].appendChild(listaTags[19])
listaTags[2].appendChild(listaTags[20])
listaTags[2].appendChild(listaTags[21])
listaTags[2].appendChild(listaTags[22])
listaTags[2].appendChild(listaTags[23])
listaTags[2].appendChild(listaTags[24])
listaTags[2].appendChild(listaTags[25])
listaTags[2].appendChild(listaTags[26])
listaTags[2].appendChild(listaTags[27])
listaTags[2].appendChild(listaTags[28])
listaTags[2].appendChild(listaTags[29])




//adicionando os elementos label na classe de css
listaTags[2].classList.add('texto')
listaTags[4].classList.add('texto')
listaTags[6].classList.add('texto')
listaTags[8].classList.add('texto')
listaTags[10].classList.add('texto')
listaTags[12].classList.add('texto')
listaTags[14].classList.add('texto')
listaTags[16].classList.add('texto')
listaTags[18].classList.add('texto')
listaTags[20].classList.add('texto')
listaTags[22].classList.add('texto')
listaTags[24].classList.add('texto')
listaTags[26].classList.add('texto')
listaTags[28].classList.add('texto')




//adicionando o elemento button na classe de css
/*listaTags[16].classList.add('button')*/

//adicionando o elemento div na classe de css
listaTags[0].classList.add('container')
listaTags[1].classList.add('container2')
listaTags[2].classList.add('container2')
listaTags[29].classList.add('button')



//adicionando atributos aos elementos
listaTags[2].setAttribute('method', 'GET')
listaTags[2].setAttribute('action', './index.html')
listaTags[4].setAttribute('name', 'nome')

listaTags[6].setAttribute('name', 'nasc')

listaTags[8].setAttribute('name', 'escolaridade')
listaTags[10].setAttribute('name', 'curso')
listaTags[12].setAttribute('name', 'email')
listaTags[14].setAttribute('name', 'experiencia')
listaTags[16].setAttribute('name', 'habilidade1')
listaTags[18].setAttribute('name', 'habilidade2')
listaTags[20].setAttribute('name', 'habilidade3')
listaTags[22].setAttribute('name', 'site')
listaTags[24].setAttribute('name', 'endereco')
listaTags[26].setAttribute('name', 'sobre')
listaTags[28].setAttribute('name', 'idioma')

/*
let body = document.querySelector('body')
let p = 
p.textContent = "Everson Bacelli"
body.appendChild(p)
*/


// método fabrica
function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}