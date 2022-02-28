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
    setYahtzee,
    setSumAndBonus,
    setTotalScore } from '../../store/scoreSlice';
import { resetCount, selectCount } from '../../store/countSlice';
import { selectPlayDice } from '../../store/diceSlice'
import { css, StyleSheet } from "aphrodite"

const stylesb = StyleSheet.create({
    active: {
        height: '2em',
        width: '4em',
        alignSelf: 'flex-end',
        cursor: 'pointer'
    },
    sumBonusTotal: {
        height: '2em',
        width: '4em',
        alignSelf: 'flex-end',
        pointerEvents: 'none'
    }
})

const ScoreCategory = (props) => {
    const score = useSelector(selectScore);
    const count = useSelector(selectCount);
    const dice = useSelector(selectPlayDice);
    const dispatch = useDispatch();

    const diceArray = dice.map((die) => {
        return die.value
    })

    const handleScoreSubmit = (dice, category) => {
        if (category === 'Ones') {
            dispatch(setOnes(diceArray))
        } else if (category === 'Twos') {
            dispatch(setTwos(diceArray))
        } else if (category === 'Threes') {
            dispatch(setThrees(diceArray))
        } else if (category === 'Fours') {
            dispatch(setFours(diceArray))
        } else if (category === 'Fives') {
            dispatch(setFives(diceArray))
        } else if (category === 'Sixes') {
            dispatch(setSixes(diceArray))
        } else if (category === 'Three of a Kind') {
            dispatch(setThreeOfAKind(diceArray))
        } else if (category === 'Four of a Kind') {
            dispatch(setFourOfAKind(diceArray))
        } else if (category === 'Full House') {
            dispatch(setFullHouse(diceArray))
        } else if (category === 'Small Straight') {
            dispatch(setSmallStraight(diceArray))
        } else if (category === 'Large Straight') {
            dispatch(setLargeStraight(diceArray))
        } else if (category === 'Chance') {
            dispatch(setChance(diceArray))
        } else if (category === 'Yahtzee') {
            dispatch(setYahtzee(diceArray))
        }
        dispatch(setSumAndBonus())
        dispatch(setTotalScore())
        dispatch(resetCount())
    }

    if (count !== 2) {
        return(
            <div className={styles.ScoreCategory} key={props.idx}>
                <div className={styles.rowNameContainer}>
                    <p className={styles.rowName}>{`${props.category}`}</p>
                </div>
                <button 
                    className={styles.button}
                    disabled={true}
                    onClick={() => handleScoreSubmit(dice, props.category)}
                >{props.scoreValue}</button>
            </div>
        )
    }

    return(
        <div className={styles.ScoreCategory} key={props.idx}>
            <div className={styles.rowNameContainer}>
                <p className={styles.rowName}>{`${props.category}`}</p>
            </div>
            <button 
                className={css([
                    stylesb.active,
                    (props.category === 'Sum'
                    || props.category === 'Bonus'
                    || props.category === 'Total Score')
                    && stylesb.sumBonusTotal
                ])}
                onClick={() => handleScoreSubmit(dice, props.category)}
            >{props.scoreValue}</button>
        </div>
    )
}

export default ScoreCategory

// USPS NUMBER: 617-654-5695 Alintia Roland