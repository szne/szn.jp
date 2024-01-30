import styles from "./Footer.module.scss";

const Header = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}><span>&copy; 2024 - szne</span></div>
        </footer>
    );
};

export default Header;