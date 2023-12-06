/* eslint-disable react/prop-types */
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">fatemeweb</a> | Lorem ipsum dolor sit amet
        </p>
      </header>
      {children}
      <footer className={styles.footer}>developed by me :) </footer>
    </>
  );
};

export default Layout;
