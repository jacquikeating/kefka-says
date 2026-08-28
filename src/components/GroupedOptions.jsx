import { useContext } from "react"
import { DebuffsContext } from "../App"

export default function GroupedOptions({ text, opt1, opt2, opt3, opt4, checkbox, setterFn }) {

    const { initialDebuffs, setInitialDebuffs } = useContext(DebuffsContext)

    function handleClick(selectedOption) {
        /* For development purposes only */
        console.log(selectedOption)

        /* If/else conditions for each debuff type? */
        if (text == "accel") {
            console.log(initialDebuffs.isAccelReal)
            setInitialDebuffs({... initialDebuffs, isAccelReal: selectedOption})
        }
    }

    return (
        <div className="grouped-options">
            <h2>{text}</h2>
            <div className="buttons">
                <button onClick={() => handleClick(true)}>
                    {opt1 === true ? "real" : opt1}
                </button>
                <button onClick={() => handleClick(false)}>
                    {opt2 === false ? "fake" : opt2}
                </button>
                {opt3 && !opt4 && <button>{opt3}</button>}
                {checkbox && 
                    <div className="checkbox-div">
                        <input type="checkbox" name={checkbox} />
                        <label htmlFor={checkbox}>{checkbox}</label>
                    </div>
                }
            </div>
            {opt4 &&
                <div className="buttons">
                    <span>•</span>
                    <button>{opt3}</button>
                    <button>{opt4}</button>
                </div>
            } 
        </div>
    )
}