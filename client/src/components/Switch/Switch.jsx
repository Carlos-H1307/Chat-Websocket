import styles from './Switch.module.css';
import { useTheme } from '../../context/ThemeContext';

export const Switch = () => {
    const { toggleTheme } = useTheme();
    return (
        <label htmlFor={styles.InputSlider} id={styles.InputSliderLabel}>
            toggle
            <input type='checkbox' id={styles.InputSlider} onClick={toggleTheme}/>
        </label>
    )
}