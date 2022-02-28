import styles from './RollDiceButton.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { rollDice } from '../../store/diceSlice'
import { incrementCount, resetCount, selectCount } from '../../store/countSlice';

const RollDiceButton = (props) => {
    const count = useSelector(selectCount)

    const dispatch = useDispatch();

    const handleRollButtonClick = () => {
        dispatch(rollDice())
        if (count === 2){
            dispatch(resetCount())
        } else {
            dispatch(incrementCount())
        }
    }

    if (count === 2) {
        return (
            <button
                className={styles.buttonActive}
                disabled={true}
            >Roll Dice</button>
        )
    }

    return (
        <button
            className={styles.buttonActive}
            onClick={() => handleRollButtonClick()}
        >Roll Dice</button>
    )
}

export default RollDiceButton