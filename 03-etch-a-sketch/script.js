const sizeBtn = document.querySelector("button.size")
const rgbBtn = document.querySelector("button.color")

let size = 16
let color = 'rgb(0, 0, 0)'
let rgbMode = false

function createBoard() {
    const container = document.createElement('div')
    container.style.cssText = 'display: flex; justify-content: center;'
    container.classList.add("container")

    for (let row = 0; row < size; row++) {
        const rowDiv = document.createElement('div')
        for (let column = 0; column < size; column++) {
            const columnDiv = document.createElement('div')
            columnDiv.style.cssText = 'border: 1px solid black; width: 25px; height: 25px;'
            rowDiv.appendChild(columnDiv)

            columnDiv.addEventListener('mouseover', () => {
                if (rgbMode) {
                    randomColor()
                } else {
                    color = 'rgb(0, 0, 0)'
                }
                columnDiv.style.backgroundColor = color;
            })
        }
        container.appendChild(rowDiv)
    }
    document.body.appendChild(container)
}
createBoard()

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    color = `rgb(${r}, ${g}, ${b})`
    console.log(color)
}

sizeBtn.addEventListener('click', () => {
    let sizeInput = Number(prompt('Enter grid size:'))

    if (!isNaN(sizeInput) && sizeInput > 0) {
        if (sizeInput >= 100) {
            size = 100
        } else {
            size = sizeInput
        }
        const container = document.querySelector("div.container")
        document.body.removeChild(container)
        createBoard()
    } else {
        alert(`Invalid size input: ${sizeInput}`)
    }
})

rgbBtn.addEventListener('click', () => {
    if (!rgbMode) {
        rgbMode = true
        rgbBtn.style.backgroundColor = 'lightgreen'
    } else {
        rgbMode = false
        rgbBtn.style.backgroundColor = 'lightcoral'
    }
})