import styles from './ScoreBoard.module.css'
import ScoreCategory from '../ScoreCategory/ScoreCategory'
import { useSelector } from 'react-redux';
import { selectScore } from '../../store/scoreSlice';

const ScoreBoard = (props) => {
    const score = useSelector(selectScore);

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