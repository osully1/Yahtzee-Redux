import styles from './Die.module.css'
import { useDispatch } from 'react-redux';
import { holdDie } from '../../store/diceSlice'
import { css, StyleSheet } from "aphrodite"

const Die = (props) => {
    const dispatch = useDispatch();

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

    const handleClick = () => {
        dispatch(holdDie(props.idx))
    }
    
    return (
        <img
            className={css([styles.dieNotSelected, props.die.selected === true && styles.dieSelected])}
            src={process.env.PUBLIC_URL + `${props.die.img}`}
            onClick={() => handleClick()}
        />
    )
}

export default Die