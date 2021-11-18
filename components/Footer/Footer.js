import styles from "./Footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

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
              <a target="_blank" rel="noopener">
                <li className={styles.socials}>LinkedIn</li>
              </a>
            </Link>
            <Link href="https://github.com/mgonza63">
              <a target="_blank" rel="noopener" > 
                <li className={styles.socials}>Github</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/about">
            <a> Who am I? </a>
          </Link>
        </li>
        {router.asPath === "/" ? (
          <li className={styles.navItem}>
            <Link href="#projects" passHref>
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "circOut", duration: 0.5, delay: 0.95 }}
              >
                What do I do?
              </motion.a>
            </Link>
          </li>
        ) : (
          <li className={styles.navItem}>
            <Link href="/#projects" passHref>
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "circOut", duration: 0.5, delay: 0.95 }}
              >
                What do I do?
              </motion.a>
            </Link>
          </li>
        )}
        <li className={styles.navItem}>
          <Link href="#contact">
            <a> Talk to me</a>
          </Link>
        </li>
      </ul>
    </motion.footer>
  );
}
