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
    isAccelReal: null,
    accelLength: null,
    spread: null,
    isShortGazeReal: null,
    isLongGazeReal: null,
    myGaze: null,
    isWaterReal: null,
    isFireReal: null
  })

  return (
    <>
      <header>
        <span>Kefka Said...</span>
      </header>
      <DebuffsContext.Provider value={{initialDebuffs, setInitialDebuffs}}>
        <SelectDebuffs />

        {/* For development purposes only */}
        {initialDebuffs.isAccelReal === true && <p>Accel is real</p> }
        {initialDebuffs.isAccelReal === false && <p>Accel is fake</p> }

      </DebuffsContext.Provider>
    </>
  )
}

export default App
export { DebuffsContext }
