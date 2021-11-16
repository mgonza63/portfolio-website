import styles from "./Navbar.module.css";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Link from "next/link";

var animDelay;

export default function Navbar() {
  const router = useRouter();
  // console.log(router.asPath);
  router.asPath === "/"? animDelay = 0.6 : animDelay = 0.2;
  return (
    <motion.header
      className={`${styles.header}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "circOut", duration: 0.5, delay: animDelay }}
    >
      <div>
        <div>
          <Link href="/">
            <a className={styles.logo}>Mauricio Gonzalez</a>
          </Link>
          <motion.small
            className={styles.smallText}
            initial={{ opacity: 0, y: -50 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "circOut", duration: 0.5, delay: animDelay + 0.2 }}
          >
            web developer {`&`} designer
          </motion.small>
        </div>
      </div>
      <ul className={styles.navbar}>
        <li className={styles.navItem}>
          <Link href="/about" passHref>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "circOut", duration: 0.5, delay: animDelay + 0.2}}
            >
              Who am I?
            </motion.a>
          </Link>
        </li>
        {router.asPath === "/" ? (
          <li className={styles.navItem}>
            <Link href="#projects" passHref>
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "circOut", duration: 0.5, delay: animDelay + 0.35 }}
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
                transition={{ ease: "circOut", duration: 0.5, delay: animDelay + 0.35 }}
              >
                What do I do?
              </motion.a>
            </Link>
          </li>
        )}

        <li className={styles.navItem}>
          <Link href="#contact" passHref>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "circOut", duration: 0.5, delay: animDelay + 0.50 }}
            >
              Talk to me
            </motion.a>
          </Link>
        </li>
      </ul>
    </motion.header>
  );
}
