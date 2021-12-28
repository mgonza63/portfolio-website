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
            <picture>
              {/* <source type="image/webp" srcSet="/images/mainImg.webp" /> */}
              <source type="image/png" srcSet="/images/mainImg.png" />
              <img
                src="/images/mainImg.png"
                alt="me standing with my hand running through my hair"
                className={styles.mainImg}
              />
            </picture>
          </a>
        </Link>
      </motion.div>
      <div className={styles.dividerContainer}>
        <span className={styles.divider}></span>
      </div>
    </motion.main>
  );
}
