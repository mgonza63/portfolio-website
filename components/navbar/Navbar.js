import styles from "./Navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className={`${styles.header}`}>
      <div>
        <Link  href="/">
          <a className={styles.logo}>Mauricio Gonzalez</a>
        </Link>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <a> Who am I? </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <a> What do I do? </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <a> Talk to me</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
