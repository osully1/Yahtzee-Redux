import styles from './ScoreBoard.module.css'
import ScoreCategory from '../ScoreCategory/ScoreCategory'
import { useSelector, useDispatch } from 'react-redux';
import { selectScore } from '../../store/scoreSlice';
import { selectCount } from '../../store/countSlice';

const ScoreBoard = (props) => {
    const score = useSelector(selectScore);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return Object.keys(score).map((category, idx) => {
        return(
            <ScoreCategory
                category={category}
                idx={idx}
            />
        )
    })
}

export default ScoreBoard