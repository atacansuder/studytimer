import React from "react";
import styles from "./Header.module.css";
import { MdSettings } from "react-icons/md";
import { GiTomato } from "react-icons/gi";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.subcontainer}>
        <h1 className={styles.title}>
          <a href="./" className={styles.title_link}>
            <GiTomato size={32} />
            Pomodoro timer
          </a>
        </h1>
        {/* <div className={styles.buttoncontainer}>
          <button className={styles.iconbutton}>
            <MdSettings size={24} /> Settings
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
