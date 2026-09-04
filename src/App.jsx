import { useState, createContext, useContext } from "react"
import SelectDebuffs from "./components/SelectDebuffs"

const DebuffsContext = createContext()

function App() {

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

  const [showAll, setShowAll] = useState(true)

  return (
    <>
      <header>
        <span>Kefka Said...</span>
      </header>
      <DebuffsContext.Provider value={{initialDebuffs, setInitialDebuffs, showAll, setShowAll}}>
        <SelectDebuffs />

        {/* For development purposes only */}
        {initialDebuffs.accelReal && <p>{initialDebuffs.accelLength} accel ({initialDebuffs.accelReal})</p>}
        {initialDebuffs.spread && <p>{initialDebuffs.spread} spread</p>}
        {initialDebuffs.shortGaze && <p>short gaze is {initialDebuffs.shortGaze}</p>}
        {initialDebuffs.longGaze && <p>long gaze is {initialDebuffs.longGaze}</p>}
        {initialDebuffs.myGaze && <p>i have {initialDebuffs.myGaze} gaze</p>}
        {initialDebuffs.water && <p>water is {initialDebuffs.water}</p>}
        {initialDebuffs.fire && <p>fire is {initialDebuffs.fire}</p>}
      </DebuffsContext.Provider>
    </>
  )
}

export default App
export { DebuffsContext }
