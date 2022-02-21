import styles from './DiceRow.module.css';
import { useSelector } from 'react-redux';
import { selectPlayDice } from '../../store/diceSlice'
import Die from '../Die/Die';

const DiceRow = (props) => {

    const dice = useSelector(selectPlayDice);

    return dice.map((die, idx) => {
        return(
            <Die 
                die={die}
                idx={idx}
                key={idx}
            />
        )
    })
}

export default DiceRow