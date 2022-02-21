import styles from './ScoreCategory.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectScore,
    setOnes,
    setTwos,
    setThrees,
    setFours,
    setFives,
    setSixes,
    setThreeOfAKind,
    setFourOfAKind,
    setFullHouse,
    setSmallStraight,
    setLargeStraight,
    setChance,
    setYahtzee, } from '../../store/scoreSlice';
import { selectCount } from '../../store/countSlice';
import { selectPlayDice } from '../../store/diceSlice'

const ScoreCategory = (props) => {
    const score = useSelector(selectScore);
    const count = useSelector(selectCount);
    const dice = useSelector(selectPlayDice);
    const dispatch = useDispatch();

    const handleScoreSubmit = (dice, category) => {
        if (category === 'Ones') {
            dispatch(setOnes(dice))
        } else if (category === 'Twos') {
            dispatch(setTwos(dice))
        } else if (category === 'Threes') {
            dispatch(setThrees(dice))
        } else if (category === 'Fours') {
            dispatch(setFours(dice))
        } else if (category === 'Fives') {
            dispatch(setFives(dice))
        } else if (category === 'Sixes') {
            dispatch(setSixes(dice))
        } else if (category === 'Three of a Kind') {
            dispatch(setThreeOfAKind(dice))
        } else if (category === 'Four of a Kind') {
            dispatch(setFourOfAKind(dice))
        } else if (category === 'Full House') {
            dispatch(setFullHouse(dice))
        } else if (category === 'Small Straight') {
            dispatch(setSmallStraight(dice))
        } else if (category === 'Large Straight') {
            dispatch(setLargeStraight(dice))
        } else if (category === 'Chance') {
            dispatch(setChance(dice))
        } else if (category === 'Yahtzee') {
            dispatch(setYahtzee(dice))
        }
    }

    return(
        <div className={styles.ScoreCategory} key={props.idx}>
            <div className={styles.rowNameContainer}>
                <p className={styles.rowName}>{`${props.category}`}</p>
            </div>
            <button 
                className={styles.button}
                onClick={() => handleScoreSubmit(dice, props.category)}
            >{props.scoreValue}</button>
        </div>
    )
}

export default ScoreCategory