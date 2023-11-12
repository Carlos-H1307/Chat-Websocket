import styles from './Switch.module.css';
import { useTheme } from '../../context/ThemeContext';

function Switch(){
    const { toggleTheme, theme } = useTheme();
    return (
        <label htmlFor={styles.InputSlider} id={styles.InputSliderLabel}>
            {theme}
            <input type='checkbox' id={styles.InputSlider} onClick={toggleTheme}/>
        </label>
    )
}

export default Switch;