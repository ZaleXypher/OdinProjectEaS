const container = document.querySelector(".container")
const sizeGrid = document.querySelector(".gridSize")
sizeGrid.addEventListener("click", () => {gridSize = prompt("How many grids do you want?"); createGrid(gridSize); console.log(gridSize)})

function randomColor(){
    let codes = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += codes[Math.floor(Math.random()*16)]
    }
    return color
}

function createGrid(size) {
    container.innerHTML = ''
    for(let y = 0; y < size; y++){
        let row = document.createElement("div")
        row.classList.add('row')
        container.appendChild(row)
        for(let x = 0; x < size; x++) {
            let column = document.createElement("div")
            column.classList.add('column')
            column.classList.add('gridBox')
            column.style.opacity = 0
            column.addEventListener("mouseenter", etch)
            row.appendChild(column)
        }
    }
}

function etch(grid) {
    let item = grid.target
    item.style.backgroundColor = randomColor()
    let currentOpacity = parseFloat(item.style.opacity)
    if(currentOpacity < 1){
        currentOpacity += 0.1
        item.style.opacity = currentOpacity
    }
    console.log(item.style.opacity)
}