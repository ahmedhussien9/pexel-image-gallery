
import styles from "./Switch.module.scss";
type Props = {
    darkTheme: boolean,
    handleToggle: (item) => void;
}

const Switch = ({ darkTheme, handleToggle }: Props) => {
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
                role="checkbox"
                aria-label="Switch to dark or light theme"
            />
            <span className={styles.slider}></span>
        </label>
    )
}

export default Switch;