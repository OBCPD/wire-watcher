import React, { createContext, useState } from 'react'

const StoreContext = createContext();

// const store = {
//     budgetRegisters: [],
//     rooms: [
//         {
//             name: "kitchen",
//             devices: [
//             {
//                 name: "cooker",
//                 power: 3000,
//                 voltage: 220,
//                 heat: [22, 31, 42, 36, 45, 52]    
//             },
//             ],
//         },
//     ]
// }

const StoreContextProvider = ({ children }) => {
    const [budgetRegisters, setBudgetRegisters] = useState([])
    const [rooms, setRooms] = useState([])
    
    const registerDevice = (device) => {
        const foundRoomIndex = rooms.findIndex((room) => room.name === device.room);
        const tempRooms = rooms

        if (foundRoomIndex != -1) {
            tempRooms[foundRoomIndex].devices.push({
                name: device.name,
                power: parseInt(device.power, 10),
                voltage: parseInt(device.voltage, 10),
                heat: device.heat ? device.heat : []
            })
        } else {
            tempRooms.push({
                name: device.room,
                devices: [{ name: device.name, power: parseInt(device.power, 10), voltage: parseInt(device.voltage, 10), heat: device.heat ? device.heat : [] }],
            });
        }
        setRooms(tempRooms)
    }

    return (
        <StoreContext.Provider value={{rooms, budgetRegisters, registerDevice}}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext, StoreContextProvider }