import { DockList } from './Docks.js'
import { HaulerList } from './ShipHaulers.js'
import { ShippingShipList } from './CargoShips.js'

const containerEl = document.querySelector(".container")
let containerHTML = `
    <div class="column">
        <h2>Shipping Ships</h2>
        ${ShippingShipList()}
    </div>
    <div class="column">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </div>
    <div class="column">
        <h2>Docks</h2>
        ${DockList()}
    </div>
`
containerEl.innerHTML = containerHTML
