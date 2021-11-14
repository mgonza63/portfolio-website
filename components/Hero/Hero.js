/* eslint-disable @next/next/no-img-element */
import styles from "./Hero.module.css";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.main className={`${utilStyles.containerLg}`}>
      <motion.span
        className={styles.mainHeading}
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.5, delay: 0.8 }}
      >
        DESIGNING SMOOTH USER EXPERIENCES
      </motion.span>
      <motion.div
        className={styles.mainImgContainer}
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.5, delay: 0.2 }}
      >
        <img
          className={styles.mainImg}
          src="/images/mainImg.png"
          alt="me standing with my hand running through my hair"
        />
      </motion.div>
    </motion.main>
  );
}