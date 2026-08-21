import GroupedOptions from "./GroupedOptions"

export default function SelectDebuffs() {

    return (
        <main>
            <h1>Select Debuffs</h1>

            <section>
                { /* Inputs go here */}
                <GroupedOptions text="short gaze" opt1="real" opt2="fake" checkbox="on me" />
            </section>
        </main>

    )
}