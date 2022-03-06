import styles from "./Navbar.module.scss";
import Switch from "../Switch/Switch";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ navBar }) {

  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return (
    <nav className={`${styles.nav}`} role="navigation">
      <ul className={`${styles.list} container`}>
        <li className={styles.item}>
          <FontAwesomeIcon icon={faDragon} size={"2x"} className={styles.logo} />
        </li>
        <li className={`${styles.item} ${styles.link}`}>
          <Switch darkTheme={darkTheme} handleToggle={handleToggle}></Switch>
        </li>
      </ul>
    </nav>
  );
}
