import styles from './PlayArea.module.css'
import DiceRow from '../DiceRow/DiceRow'
import RollDiceButton from '../RollDiceButton/RollDiceButton'

const PlayArea = (props) => {
    return (
        <>
            <div className={styles.DiceRow}>
                <DiceRow />
            </div>
            <div className={styles.RollDiceButton}>
                <RollDiceButton />
            </div>
        </>
    )
}

export default PlayArea