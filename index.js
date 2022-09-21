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

function newItem(url, left, bottom){
    let item = document.createElement('img')
    item.src=url
    item.style.position='fixed'
    item.style.left=left + 'px'
    item.style.bottom=bottom + 'px'
    document.body.append(item)

    item.addEventListener('click',function(){
        item.remove()
    })
}


