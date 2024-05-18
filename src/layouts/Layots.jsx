import React from "react";
import styles from "../layouts/layouts.module.css";

function Layots({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/erfanmah7">erfanmah7</a> | React js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by erfan with ❤️</p>
      </footer>
    </>
  );
}

export default Layots;
