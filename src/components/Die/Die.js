import styles from './Die.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { css, StyleSheet } from "aphrodite"
import { useState, useRef, useEffect } from 'react'

const Die = (props) => {

    const styles = StyleSheet.create({
        dieSelected: {
            height: '4em',
            width: '4em',
            margin: '1em',
            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
            backgroundSize: 'cover',
            transform: 'translateY(-20px)'
        },
        dieNotSelected: {
            height: '4em',
            width: '4em',
            margin: '1em',
            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
            backgroundSize: 'cover'
        }
    })

    // if (props.die.value === 1) {
    //     props.die.img = "die1.svg"
    // } else if (props.die.value === 2) {
    //     props.die.img = "die2.svg"
    // } else if (props.die.value === 3) {
    //     props.die.img = "die3.svg"
    // } else if (props.die.value === 4) {
    //     props.die.img = "die4.svg"
    // } else if (props.die.value === 5) {
    //     props.die.img = "die5.svg"
    // } else if (props.die.value === 6) {
    //     props.die.img = "die6.svg"
    // }

    // props.die.img = `die${props.die.value}.svg`

    // const handleClick = () => {
    //     const newDiceArray = [...props.playDice]
    //     newDiceArray[props.idx].selected = !newDiceArray[props.idx].selected
    //     props.setPlayDice(newDiceArray)
    // }
    
    return (
        <img
            className={css([styles.dieNotSelected, props.die.selected === true && styles.dieSelected])}
            src={process.env.PUBLIC_URL + `${props.die.img}`}
            // onClick={() => handleClick()}
        />
    )
}

export default Die