export default function GroupedOptions({ text, opt1, opt2, opt3, checkbox, setterFn }) {

    return (
        <div>
            <h2>{text}</h2>
            <button>{opt1}</button>
            <button>{opt2}</button>
            {opt3 && <button>{opt3}</button>}
            {checkbox && 
                <>
                    <input type="checkbox" name={checkbox} />
                    <label htmlFor={checkbox}>{checkbox}</label>
                </>
            }
        </div>
    )
}