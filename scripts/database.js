const database = {
    cargoShips: [
        { id: 1, haulerId: 3,  name: "Esso Atlantic" },
        { id: 2, haulerId: 2,  name: "Prairial" },
        { id: 3, haulerId: 4,  name: "Palais Royal" },
        { id: 4, haulerId: 1,  name: "Rivoli" },
        { id: 5, haulerId: 5,  name: "Champs Elysee" },
        { id: 6, haulerId: 4,  name: "Ever Ace" },
        { id: 7, haulerId: 1,  name: "Nissei Maru" },
        { id: 8, haulerId: 1,  name: "MSC Gulsun" },
        { id: 9, haulerId: 2,  name: "HMM Rotterdam" },
        { id: 10, haulerId: 4,  name: "CMA CGM Trocadero" }
    ],
    shipHaulers: [
        { id: 1, dockId: 3, name: "Pioneering Spirit" },
        { id: 2, dockId: 3, name: "Boaty MyBoatface" },
        { id: 3, dockId: 4, name: "Seawise Giant" },
        { id: 4, dockId: 2, name: "Wave Crusher" },
        { id: 5, dockId: 2, name: "Big Bertha" }
    ],
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ]
}

export const alphaByName = (a, b) => {
    if (a.name < b.name) {
        return -1
    } else if (a.name > b.name) {
        return 1
    } else {
        return 0
    }
}

export const alphaByLocation = (a, b) => {
    if (a.location < b.location) {
        return -1
    } else if (a.location > b.location) {
        return 1
    } else {
        return 0
    }
}

export const getCargoShips = () => {
    return database.cargoShips.map(ship => ({...ship}))
}
export const getShipHaulers = () => {
    return database.shipHaulers.map(hauler => ({...hauler}))
}
export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}