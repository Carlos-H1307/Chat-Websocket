import styles from './SwipeButton.module.css';

function SlideButton({isSwiped, onClick: func}){
    return(
        <div id={styles.SwipeButton} onClick={func} is-swiped={isSwiped}>
            <div id={styles.Pipe1} className={styles.Pipe}></div>
            <div id={styles.Pipe2} className={styles.Pipe}></div>
        </div>
    );
}

export default SlideButton;