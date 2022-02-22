import styles from './ScoreBoard.module.css'
import ScoreCategory from '../ScoreCategory/ScoreCategory'
import { useSelector, useDispatch } from 'react-redux';
import { selectScore } from '../../store/scoreSlice';
import { selectCount } from '../../store/countSlice';

const ScoreBoard = (props) => {
    const score = useSelector(selectScore);
    const count = useSelector(selectCount);

    return Object.keys(score).map((category, idx) => {
        const scoreValue = score[`${category}`]
        return(
            <ScoreCategory
                category={category}
                idx={idx}
                scoreValue={scoreValue}
                key={idx}
            />
        )
    })
}

export default ScoreBoard