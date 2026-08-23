export default function GroupedOptions({ text, opt1, opt2, opt3, opt4, checkbox, setterFn }) {

    return (
        <div className="grouped-options">
            <h2>{text}</h2>
            <div className="buttons">
                <button>{opt1}</button>
                <button>{opt2}</button>
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