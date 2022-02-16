import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setInitialDice, selectPlayDice } from '../../store/diceSlice'
import PlayArea from '../PlayArea/PlayArea';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import styles from './GameTable.module.css';

const GameTable = (props) => {

    const dice = useSelector(selectPlayDice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInitialDice([
            {value: 1, selected: false, img: 'die1.svg'},
            {value: 2, selected: false, img: 'die2.svg'},
            {value: 3, selected: false, img: 'die3.svg'},
            {value: 4, selected: false, img: 'die4.svg'},
            {value: 5, selected: false, img: 'die5.svg'}
        ]))
    }, [])

    // const [yourDice, setYourDice] = useState([])
    // const [playDice, setPlayDice] = useState([
    //     {value: null, selected: false, img: ''}, {value: null, selected: false, img: ''}, {value: null, selected: false, img: ''}, {value: null, selected: false, img: ''}, {value: null, selected: false, img: ''}
    // ])
    // const [selectedDice, setSelectedDice] = useState([
    //     {value: 1, selected: false, img: ''}, {value: 2, selected: false, img: ''}, {value: 3, selected: false, img: ''}, {value: 4, selected: false, img: ''}, {value: 5, selected: false, img: ''}
    // ])

    // useEffect(() => {
    //     setPlayDice([
    //         {value: 1, selected: false, img: "die1.svg"}, {value: 2, selected: false, img: "die2.svg"}, {value: 3, selected: false, img: "die3.svg"}, {value: 4, selected: false, img: "die4.svg"}, {value: 5, selected: false, img: "die5.svg"}
    //     ])
    // }, [])

    return (
        <>
            <PlayArea />
            <ScoreBoard />
        </>
    )
}

export default GameTable