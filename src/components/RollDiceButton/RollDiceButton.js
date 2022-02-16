import styles from './RollDiceButton.module.css'
import { useDispatch } from 'react-redux';
import { rollDice } from '../../store/diceSlice'

const RollDiceButton = (props) => {
    const dispatch = useDispatch();

    const handleRollButtonClick = () => {
        dispatch(rollDice())
    }

    return (
        <button
            className={styles.RollDiceButton}
            onClick={() => handleRollButtonClick()}
        >Roll</button>
    )
}

export default RollDiceButton