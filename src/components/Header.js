import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>
        <a href="./" className={styles.title_link}>
          Pomodoro timer
        </a>
      </h1>
    </header>
  );
}

export default Header;
