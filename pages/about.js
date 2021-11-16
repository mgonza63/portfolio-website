/* eslint-disable @next/next/no-img-element */
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className={utilStyles.containerLg}
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0, opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "circOut", duration: 0.5, delay: 0.2 }}
    >
      <Navbar />
      <p className={utilStyles.copy}>
        My name is Mauricio and I am based in Austin, TX, and I have been a
        developer for about 2 years. Currently, I feel very comfortable working
        with
        <span className={utilStyles.highlight}> React, Next.js,</span> and
        writing my own CSS. I also love exploring different technologies and
        have found many interesting ones such as p5.js, ChakraUI, Vite, and
        others.
      </p>
      <img
        className={utilStyles.image}
        src="/images/ut.jpg"
        alt="screenshot of the project's website"
      />
      <p className={utilStyles.copy}>
        About two years ago, I completed the Coding Bootcamp from the{" "}
        <span className={utilStyles.highlight}> University of Texas</span>. It
        was an awesome experience where I got to learn
        <span className={utilStyles.highlight}>
          {" "}
          JavaScript, Node.js, MySQL, MongoDB, React,
        </span>{" "}
        and more! But my coding journey did not begin there...
      </p>
      <div className={utilStyles.centered}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="180"
          height="180"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
        </svg>
      </div>
      <div className={utilStyles.centered}>
        <small>(only if you are truly interested)</small>
      </div>
      <p className={utilStyles.copy}>
        I started with a dream of making a game, so I began researching and
        learning a bit of code. I tried Unity and Godot, and to my surprise...
        Making a game is extremely hard. I created a few projects, I really
        enjoyed making them but ultimately failed. However, coding led me to the
        idea of creating high-value design. Back then I saw design as a hobby
        not a career, it might be silly (and wrong) but that is how I saw it.
        For me, coding was a skill added on top of design, but design is no
        joke. Sometimes it is the hardest part.
      </p>
      <p className={utilStyles.copy}>
        I have always been interesting in art and design, ever since I was
        little, I loved drawing which translated into Photoshop and Illustrator
        later on in my life but, as I mentioned before, I never saw it as a
        career. This was a mistake because I honestly believe that I would have
        crushed design school.
      </p>
      <p className={utilStyles.copy}>
        Anyways... After failing at game development, I decided to join the
        Coding Bootcamp at UT where you can learn how to be a Full-Stack
        Developer in only 24 weeks! (mhm) This course was very challenging and I
        definitely had to learn way more on top of it, but without it, I could
        not have found my passion for creative coding, web devolpment and web
        design.
      </p>
      <div className={utilStyles.mb}></div>
      <Contact />
      <Footer />

      <style jsx>{`
        svg {
          fill: #dde8e4;
          opacity: 0.8;
        }
        small {
          transform: translateY(-15px);
          opacity: 0.8;
        }
      `}</style>
    </motion.div>
  );
}
