/* eslint-disable @next/next/no-img-element */
import styles from "./Hero.module.css";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <motion.main className={`${utilStyles.containerLg} ${styles.heroSection}`}>
      <motion.span
        className={styles.mainHeading}
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.5, delay: 0.4 }}
      >
        DESIGNING SMOOTH USER EXPERIENCES
      </motion.span>
      {/* WEB DEVELOPER AND DESIGNER  */}
      <motion.div
        className={styles.mainImgContainer}
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.5, delay: 0.2 }}
      >
        <Link href="/about">
          <a>
            <img
              className={styles.mainImg}
              src="/images/mainImg.png"
              alt="me standing with my hand running through my hair"
            />
          </a>
        </Link>
      </motion.div>
      <hr className={styles.divider} />

    </motion.main>
  );
}
