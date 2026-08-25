import { useState } from "react"
import SelectDebuffs from "./components/SelectDebuffs"

function App() {
  const [accel, setAccel] = useState({isReal: null, length: null})
  const [spread, setSpread] = useState(null)
  const [shortGaze, setShortGaze] = useState({isReal: null, isOnMe: null})
  const [longGaze, setLongGaze] = useState({isReal: null, isOnMe: null})
  const [water, setWater] = useState({isReal: null})
  const [fire, setFire] = useState({isReal: null})

  return (
    <>
      <header>
        <span>Kefka Said...</span>
      </header>
      <SelectDebuffs />
    </>
  )
}

export default App
