import styles from "./Contact.module.css";
import utilStyles from "../../styles/utils.module.css";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ ease: "circOut", duration: 0.5 }}
    viewport={{ once: true }}>
      <h3 className={styles.subheading}>
        Contact me if you are interested in working with me or have any
        questions.
      </h3>
      <form
        className={styles.form}
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className={styles.formGroup}>
          <p>
            <label>
              Your Name <span className={utilStyles.highlight}>*</span>
            </label>
          </p>
          <input type="text" name="name" required placeholder="John Doe" />
        </div>
        <div className={styles.formGroup}>
          <p>
            <label>
              Your Email <span className={utilStyles.highlight}>*</span>
            </label>
          </p>
          <input
            type="email"
            name="email"
            required
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className={styles.formGroup}>
          <p>
            <label>
              Message <span className={utilStyles.highlight}>*</span>
            </label>
          </p>
          <textarea
            name="message"
            required
            placeholder="Hi, I would like to work with you!"
          ></textarea>
        </div>
        <p>
          <button className={styles.submitButton} type="submit">Send</button>
        </p>
      </form>
    </motion.section>
  );
}
