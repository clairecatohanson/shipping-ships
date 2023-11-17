import { getShipHaulers, getCargoShips, alphaByName } from './database.js'

document.addEventListener("click", (event) => {
    const clickedEl = event.target
    const cargoShips = getCargoShips()
    if (clickedEl.dataset.type === "hauler") {
        const clickedHaulerId = parseInt(clickedEl.dataset.id)
        let counter = 0
        for (const ship of cargoShips) {
            if (clickedHaulerId === ship.haulerId) {
                counter++
            }
        }
        window.alert(`${clickedEl.innerHTML} is carrying ${counter} ships.`)
    }
})

export const HaulerList = () => {
    const haulers = getShipHaulers()
    haulers.sort(alphaByName)

    let haulersHTML = '<ul>'

    for (const hauler of haulers) {
        haulersHTML += `
            <li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>
        `
    }
    haulersHTML += '</ul>'
    return haulersHTML
}