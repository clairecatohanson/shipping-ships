import { alphaByName, getCargoShips } from './database.js'
import { getShipHaulers } from './database.js'

document.addEventListener("click", (event) => {
    const clickedEl = event.target
    const allHaulers = getShipHaulers()
    if (clickedEl.dataset.type === "cargoShip") {
        const haulerId = clickedEl.dataset.haulerid
        let haulingShip = {name: "Incorrect"}
        for (const hauler of allHaulers) {
            if (parseInt(haulerId) === hauler.id) {
                haulingShip.name = `${hauler.name}`
            }
        }
        window.alert(`${clickedEl.innerHTML} is being hauled by ${haulingShip.name}`)
    }
})

export const ShippingShipList = () => {
    const cargoShips = getCargoShips()
    cargoShips.sort(alphaByName)
    
    let cargoHTML = '<ul>'
    for (const ship of cargoShips) {
        cargoHTML += `
            <li data-type="cargoShip" data-haulerid="${ship.haulerId}">${ship.name}</li>
        `
    }
    cargoHTML += '</ul>'
    return cargoHTML
}