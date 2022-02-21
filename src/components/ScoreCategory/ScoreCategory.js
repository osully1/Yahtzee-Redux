import styles from './ScoreCategory.module.css'

const ScoreCategory = (props) => {
    return(
        <div className={styles.ScoreCategory} key={props.idx}>
            <div className={styles.rowNameContainer}>
                <p className={styles.rowName}>{`${props.category}`}</p>
            </div>
            <button className={styles.button}>{props.scoreValue}</button>
        </div>
    )
}

export default ScoreCategory