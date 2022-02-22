import styles from './RollDiceButton.module.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { rollDice } from '../../store/diceSlice'
import { incrementCount, resetCount, selectCount } from '../../store/countSlice';

const RollDiceButton = (props) => {
    const [active, setActive] = useState(true)

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

    let buttonStyle
    if (active) {
        buttonStyle = styles.buttonActive
    } else {
        buttonStyle = styles.buttonInactive
    }

    return (
        <button
            className={buttonStyle}
            onClick={() => handleRollButtonClick()}
        >Roll Dice</button>
    )
}

export default RollDiceButton