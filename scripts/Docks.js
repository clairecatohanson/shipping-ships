import { getDocks, getShipHaulers, alphaByLocation } from './database.js'

document.addEventListener("click", (event) => {
    const itemClicked = event.target
    const allHaulers = getShipHaulers()
    if (itemClicked.dataset.type === "dock") {
        const clickedId = parseInt(itemClicked.dataset.dockid)
        let haulerMatches = ''
        for (const hauler of allHaulers) {
            if (clickedId === hauler.dockId) {
                haulerMatches += `${hauler.name}, `
            }
        }
        if (haulerMatches.length === 0) {
            window.alert(`The ${itemClicked.innerHTML} dock is currently unloading nothing.`)
        }
        else {
            window.alert(`The ${itemClicked.innerHTML} dock is currently unloading ${haulerMatches.slice(0, -2)}`)
        }
    }
})

export const DockList = () => {
    const docks = getDocks()
    const sortedDocks = structuredClone(docks)
    sortedDocks.sort(alphaByLocation)

    console.log(docks)
    console.log(sortedDocks)

    let docksHTML = '<ul>'

    for (const dock of sortedDocks) {
        docksHTML += `<li data-type="dock" data-dockid="${dock.id}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }
    docksHTML += '</ul>'
    return docksHTML
}
