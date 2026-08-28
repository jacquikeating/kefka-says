import { useContext } from "react"
import { DebuffsContext } from "../App"
import GroupedOptions from "./GroupedOptions"

export default function SelectDebuffs() {

    const { initialDebuffs, setInitialDebuffs } = useContext(DebuffsContext)

    return (
        <main>
            <h1>Select Debuffs</h1>

            <section>
                <GroupedOptions text="accel" opt1={true} opt2={false} opt3="short" opt4="long" />
                <GroupedOptions text="spread" opt1="short" opt2="long" opt3="N/A" />
                <GroupedOptions text="short gaze" opt1="real" opt2="fake" checkbox="on me" />
                <GroupedOptions text="long gaze" opt1="real" opt2="fake" checkbox="on me" />
                <GroupedOptions text="water" opt1="real" opt2="fake" />
                <GroupedOptions text="fire" opt1="real" opt2="fake" />
            </section>
        </main>

    )
}