import styles from './RollDiceButton.module.css'

const RollDiceButton = (props) => {

    const handleRollButtonClick = () => {
        let newDiceArray = props.playDice
        newDiceArray.forEach(die => {
            if (die.selected === false) {
                die.value = Math.floor(Math.random() * 6 + 1)
                die.img = `die${die.value}.svg`
            }
        })
        props.setPlayDice(newDiceArray)
    }

    return (
        <button
            className={styles.RollDiceButton}
            onClick={() => handleRollButtonClick()}
        >Roll</button>
    )
}

export default RollDiceButton