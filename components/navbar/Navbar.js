import styles from "./Navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className={`${styles.header}`}>
      <div>
        <span className={styles.logo}>Mauricio Gonzalez</span>
      </div>
      <li className={styles.navbar}>
        <ul className={styles.navItem}>
          <Link href="/" passHref>
            <a> Who am I? </a>
          </Link>
        </ul>
        <ul className={styles.navItem}>
          <Link href="/">
            <a> What do I do? </a>
          </Link>
        </ul>
        <ul className={styles.navItem}>
          <Link href="/">
            <a> Talk to me</a>
          </Link>
        </ul>
      </li>
    </header>
  );
}
