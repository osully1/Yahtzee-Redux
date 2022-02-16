import styles from './ScoreBoard.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectScore } from '../../store/scoreSlice';
import { selectCount } from '../../store/countSlice';

const ScoreBoard = (props) => {
    const score = useSelector(selectScore);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div className={styles.Scoreboard}>
            
        </div>
    )
}

export default ScoreBoard