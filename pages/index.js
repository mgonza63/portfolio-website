import Head from "next/head";
import { motion } from "framer-motion";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero/Hero.js";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {


  return (
    <div className={utilStyles.containerLg} lang="en">
      <Head>
        <title>Mauricio Gonzalez | Home</title>
        <meta
          name="description"
          content="Mauricio Gonzalez' Portfolio Website! Get to know about me and my projects"
        />
        <meta property="og:image" content="/images/site-img.jpg" />

        <link rel="stylesheet" href="https://use.typekit.net/qzg3egg.css" />
      </Head>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
