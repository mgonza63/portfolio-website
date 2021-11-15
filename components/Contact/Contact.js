import styles from "./Contact.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function Contact() {
  return (
    <section>
      <h3 className={styles.subheading}>
        Contact me if you are interested in working with me or have any
        questions.
      </h3>
      <form
        className={styles.form}
        name="contact"
        method="POST"
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
    </section>
  );
}
