import styles from "./Footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.footer
      className={`${styles.header}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "circOut", duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div>
        <Link href="/">
          <a className={styles.logo}>Mauricio Gonzalez</a>
        </Link>
        <div>
          <ul className={styles.socialsList}>
            <Link href="https://www.linkedin.com/in/mauricio-gonzalez-b940b4195/">
              <a target="_blank">
                <li className={styles.socials}>LinkedIn</li>
              </a>
            </Link>
            <Link href="">
              <a target="_blank">
                <li className={styles.socials}>Github</li>
              </a>
            </Link>
          </ul>
        </div>
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
    </motion.footer>
  );
}
