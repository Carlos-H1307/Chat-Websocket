import styles from './FormButton.module.css';

function FormButton({text}){
    return(
        <div>
            <button className={styles.FormButton} type='submit'>{text}</button>
        </div>
    )
}

export default FormButton;