let tags = [/*0*/'div', /*1*/'img', 'p', 'p', 'div','div','p','p','div','div','div','p','p','div','div','p','div','p','p','p','div','p','p','p','p','p','p','div','div','p']
let listaTags = []
let body = document.querySelector('body')
var urlParams = new URLSearchParams(window.location.search)

// criei as 3 tags: div, img e p
tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});
listaTags[2].textContent = urlParams.get('nome')
listaTags[3].textContent = urlParams.get('nasc')
listaTags[6].textContent = urlParams.get('curso')
listaTags[7].textContent = urlParams.get('email')
listaTags[11].textContent = "Sobre Mim"
listaTags[12].textContent = "Minhas Habilidades"
listaTags[15].textContent = urlParams.get('sobre')
listaTags[16].textContent = urlParams.get('habilidade1')
listaTags[17].textContent = urlParams.get('habilidade2')
listaTags[18].textContent = urlParams.get('habilidade3')
listaTags[19].textContent = urlParams.get('idioma')
listaTags[21].textContent = urlParams.get('endereco')
listaTags[22].textContent = urlParams.get('site')
listaTags[23].textContent = "Experiência"
listaTags[24].textContent = urlParams.get('experiencia')
listaTags[25].textContent = "Escolaridade"
listaTags[26].textContent = urlParams.get('escolaridade')
listaTags[1].src="https://img.freepik.com/fotos-premium/retrato-do-perfil-de-um-modelo-adulto-masculino-com-oculos-homem-de-negocios-vestindo-terno-preto-e-gravata-branca-e-camisa_246930-1948.jpg?w=2000"

// adicionei a div no DOM
body.appendChild(listaTags[0])
body.appendChild(listaTags[8])
body.appendChild(listaTags[13])
body.appendChild(listaTags[14])
body.appendChild(listaTags[20])

listaTags[0].classList.add('container')
listaTags[4].classList.add('container2')
listaTags[5].classList.add('container3')
listaTags[8].classList.add('container4')
listaTags[9].classList.add('container5')
listaTags[10].classList.add('container6')
listaTags[20].classList.add('container9')
listaTags[27].classList.add('container10')
listaTags[28].classList.add('container11')


// incluindo na div a tag img e a p

listaTags[13].appendChild(listaTags[0])
listaTags[13].appendChild(listaTags[8])
listaTags[14].appendChild(listaTags[0])
listaTags[14].appendChild(listaTags[8])

listaTags[0].appendChild(listaTags[4])
listaTags[0].appendChild(listaTags[5])
listaTags[4].appendChild(listaTags[1])
listaTags[5].appendChild(listaTags[2])
listaTags[5].appendChild(listaTags[3])
listaTags[5].appendChild(listaTags[6])
listaTags[5].appendChild(listaTags[7])
listaTags[5].appendChild(listaTags[19])
listaTags[5].appendChild(listaTags[21])
listaTags[5].appendChild(listaTags[22])
listaTags[8].appendChild(listaTags[9])
listaTags[8].appendChild(listaTags[10])
listaTags[9].appendChild(listaTags[11])
listaTags[9].appendChild(listaTags[15])
listaTags[10].appendChild(listaTags[12])
listaTags[10].appendChild(listaTags[16])
listaTags[10].appendChild(listaTags[17])
listaTags[10].appendChild(listaTags[18])
listaTags[20].appendChild(listaTags[23])
listaTags[20].appendChild(listaTags[24])
listaTags[20].appendChild(listaTags[25])
listaTags[20].appendChild(listaTags[26])
listaTags[20].appendChild(listaTags[27])
listaTags[20].appendChild(listaTags[28])
listaTags[27].appendChild(listaTags[23])
listaTags[27].appendChild(listaTags[24])
listaTags[28].appendChild(listaTags[25])
listaTags[28].appendChild(listaTags[26])
listaTags[28].appendChild(listaTags[29])



listaTags[1].classList.add('img')
listaTags[2].classList.add('texto')
listaTags[3].classList.add('texto')
listaTags[6].classList.add('texto')
listaTags[7].classList.add('texto')
listaTags[11].classList.add('textoNegrito')
listaTags[12].classList.add('textoNegrito')
listaTags[15].classList.add('texto')
listaTags[16].classList.add('texto')
listaTags[17].classList.add('texto')
listaTags[18].classList.add('texto')
listaTags[19].classList.add('texto')
listaTags[21].classList.add('texto')
listaTags[22].classList.add('texto')
listaTags[23].classList.add('textoNegrito')
listaTags[24].classList.add('texto')
listaTags[25].classList.add('textoNegrito')
listaTags[26].classList.add('texto')
listaTags[29].classList.add('texto')




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