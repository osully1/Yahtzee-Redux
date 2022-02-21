import styles from './ScoreCategory.module.css'

const ScoreCategory = (props) => {
    console.log(props.key)
    return(
        <div className={styles.ScoreCategory} key={props.idx}>
            <p>{`${props.category}`}</p>
        </div>
    )
}

export default ScoreCategory