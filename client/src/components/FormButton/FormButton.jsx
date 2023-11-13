import styles from './FormButton.module.css';

function FormButton(props){
    return(
        <div>
            <button className={styles.FormButton} type='submit'>{props.children}</button>
        </div>
    )
}

export default FormButton;