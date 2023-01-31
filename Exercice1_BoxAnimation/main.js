//creation du button 
let button = document.createElement('button')
//ajout du text + au button
    button.textContent='+'
// ajout de la classe add-box
    button.className='add-box'
//selection du body
let body = document.querySelector('body')
//Ajout
body.appendChild(button)
//box


//ajout d'un ecouteur d'evement qui permet la creation d'une nouvelle box a chaque clique
button.addEventListener('click',()=>{
    let box = document.createElement('div')
    box.className='box'
    body.appendChild(box)
})

