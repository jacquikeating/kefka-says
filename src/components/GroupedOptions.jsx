import { useContext, useState } from "react"
import { DebuffsContext } from "../App"

export default function GroupedOptions({ text, opt1, opt2, opt3, opt4, checkbox }) {
    const [checked, setChecked] = useState(false) 

    const { initialDebuffs, setInitialDebuffs } = useContext(DebuffsContext)

    function handleClick(selectedOption) {
        /* If/else conditions for each debuff type */
        if (selectedOption == opt3 && text == "accel" || selectedOption == opt4) {
            setInitialDebuffs({... initialDebuffs, accelLength: selectedOption})
        } else if (text == "accel") {
            setInitialDebuffs({... initialDebuffs, accelReal: selectedOption})
        } else if (text == "short gaze") {
            setInitialDebuffs({... initialDebuffs, shortGaze: selectedOption})
        } else if (text == "long gaze") {
            setInitialDebuffs({... initialDebuffs, longGaze: selectedOption})
        } else if (text == "water") {
            setInitialDebuffs({... initialDebuffs, water: selectedOption})
        } else if (text == "fire") {
            setInitialDebuffs({... initialDebuffs, fire: selectedOption})
        } else if (text == "spread") {
            setInitialDebuffs({... initialDebuffs, spread: selectedOption}) 
        } else if (text == "my gaze") {
            setInitialDebuffs({... initialDebuffs, myGaze: selectedOption})
        }
    }

    function handleCheck(e) {
        setChecked(e.target.checked)
        if (text == "short gaze") {
            setInitialDebuffs({... initialDebuffs, myGaze: "short"})
        } else if (text == "long gaze") {
            setInitialDebuffs({... initialDebuffs, myGaze: "long"})
        }
    }

    return (
        <div className="grouped-options">
            <h2>{text}</h2>
            <div className="buttons">
                <button onClick={() => handleClick(opt1)}>{opt1}</button>
                <button onClick={() => handleClick(opt2)}>{opt2}</button>
                {opt3 && !opt4 && <button onClick={() => handleClick("no")}>{opt3}</button>}
                {checkbox && 
                    <div className="checkbox-div">
                        <input type="checkbox" name={checkbox} checked={checked} onChange={e => handleCheck(e)} />
                        <label htmlFor={checkbox}>{checkbox}</label>
                    </div>
                }
            </div>
            {opt4 &&
                <div className="buttons">
                    <span>•</span>
                    <button onClick={() => handleClick(opt3)}>{opt3}</button>
                    <button onClick={() => handleClick(opt4)}>{opt4}</button>
                </div>
            } 
        </div>
    )
}