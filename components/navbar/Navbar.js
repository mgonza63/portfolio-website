import styles from "./Navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";

import Link from "next/link";
export default function Navbar() {
  return (
    <motion.header
      className={`${styles.header}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "circOut", duration: 0.5, delay: 0.8 }}
    >
      <div>
        <Link href="/">
          <a className={styles.logo}>Mauricio Gonzalez</a>
        </Link>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "circOut", duration: 0.5, delay: 1 }}
            >
              Who am I?
            </motion.a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "circOut", duration: 0.5, delay: 1.15 }}
            >
              What do I do?
            </motion.a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "circOut", duration: 0.5, delay: 1.3 }}
            >
              Talk to me
            </motion.a>
          </Link>
        </li>
      </ul>
    </motion.header>
  );
}
