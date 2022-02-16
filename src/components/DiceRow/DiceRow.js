import styles from './DiceRow.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { rollDice, selectDice } from '../../store/diceSlice'
import Die from '../Die/Die';

const DiceRow = (props) => {

    const dice = useSelector(selectDice);

    const dicex = [1, 2, 3, 4, 5]

    return dicex.map((die, idx) => {
        return(
            <Die 
                die={die}
                idx={idx}
            />
        )
    })
}

export default DiceRow