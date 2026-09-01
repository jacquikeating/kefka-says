import { useState, createContext, useContext } from "react"
import SelectDebuffs from "./components/SelectDebuffs"

const DebuffsContext = createContext()

function App() {
  // const [accel, setAccel] = useState({isReal: null, length: null})
  // const [spread, setSpread] = useState(null)
  // const [shortGaze, setShortGaze] = useState({isReal: null, isOnMe: null})
  // const [longGaze, setLongGaze] = useState({isReal: null, isOnMe: null})
  // const [water, setWater] = useState({isReal: null})
  // const [fire, setFire] = useState({isReal: null})

  const [initialDebuffs, setInitialDebuffs] = useState({
    accelReal: null,
    accelLength: null,
    spread: null,
    shortGaze: null,
    longGaze: null,
    myGaze: null,
    water: null,
    fire: null
  })

  return (
    <>
      <header>
        <span>Kefka Said...</span>
      </header>
      <DebuffsContext.Provider value={{initialDebuffs, setInitialDebuffs}}>
        <SelectDebuffs />

        {/* For development purposes only */}
        {initialDebuffs.accelReal && <p>{initialDebuffs.accelLength} accel ({initialDebuffs.accelReal})</p>}
        {initialDebuffs.spread && <p>{initialDebuffs.spread} spread</p>}

      </DebuffsContext.Provider>
    </>
  )
}

export default App
export { DebuffsContext }
