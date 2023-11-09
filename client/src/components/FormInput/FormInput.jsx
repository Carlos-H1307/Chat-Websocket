import styles from "./FormInput.module.css";

function FormInput({idName, value, setValue}) {
    return (
        <label htmlFor={idName} className={styles.FormInputContainer}>
            <div className={styles.FormInputIdName}>
                {idName}
            </div>

            <input 
            className={styles.FormInput}  
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </label>
    )
}

export default FormInput;