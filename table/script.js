const createBtn = document.getElementById('create-btn')
const clearBtn = document.getElementById('clear-btn')
const main = document.querySelector('main')

// const openBtn = document.getElementById('open-btn')
// const closeBtn = document.getElementById('close-btn')
// will implement this later


const tableDiv = document.createElement('div')
tableDiv.classList.add('table-container')

const rowInput = document.getElementById('rows')
const colInput = document.getElementById('cols')

let rows = rowInput.value
let cols = colInput.value


rowInput.addEventListener('change', (e) => {
    rows = e.target.value

    if (rows > 100)
        rows = 100
})

colInput.addEventListener('change', (e) => {
    cols = e.target.value

    if (cols > 100)
        cols = 100
})

createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("rows = ",rows)
    console.log("cols = ",cols)
    
    createTable(rows, cols)
})


clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    tableDiv.innerHTML = ''
    main.innerHTML = ''
})

const createTable = (rows, cols) => {
    const table = document.createElement('table')
    table.classList.add('table')
    table.setAttribute('cellspacing', '5')
    
    createTableElements(rows, cols, table)
    console.log(table)
    
    tableDiv.appendChild(table)
    main.appendChild(tableDiv)

}

const createTableElements = (rows, cols, table) => {
    for (let i=1; i<=rows; i++)
    {
        const tr = document.createElement('tr')
        for (let j=1; j<=cols; j++)
        {
            const td = document.createElement('td')
            td.textContent = `explorin`
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

