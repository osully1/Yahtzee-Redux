import styles from './ScoreCategory.module.css'

const ScoreCategory = (props) => {
    return(
        <div className={styles.ScoreCategory} key={props.idx}>
            <p>{`${props.category}`}</p>
            <button>{props.scoreValue}</button>
        </div>
    )
}

export default ScoreCategory