const newRowButton = document.querySelector('button')
const jokerTable = document.querySelector('table')
const rowCountElement = document.querySelector('p')

let rowCount = 0

newRowButton.addEventListener('click', addJokerRow)


function addJokerRow() {
    const row = jokerTable.insertRow()

    for (let i = 0; i < 7; i++) {
        const cell = row.insertCell()
        cell.textContent = Math.floor(Math.random() * 10)
        cell.classList.add('jokerCell')
    }

    rowCount++
    rowCountElement.textContent = 'Arvottuja rivejä: ' + rowCount
}
