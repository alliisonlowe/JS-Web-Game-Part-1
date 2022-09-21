function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
}

newImage('assets/green-character.gif', 100, 150)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

let sword = document.createElement('img')
sword.src='assets/sword.png'
sword.position='fixed'
sword.left='500px'
sword.bottom='405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})
