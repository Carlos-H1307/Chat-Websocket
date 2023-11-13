import styles from "./FormInput.module.css";

function FormInput({idName, value, setValue, type, children}) {
    return (
        <label htmlFor={idName} className={styles.FormInputContainer}>
            <div className={styles.FormInputIdName}>
                {children}
            </div>

            <input 
            id={idName}
            className={styles.FormInput}  
            type={type} 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </label>
    )
}

export default FormInput;