import Head from "next/head";
import { motion } from "framer-motion";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../../my-next-portfolio/components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.js";

export default function Home() {
  return (
    <div className={utilStyles.containerLg}>
      <Head>
        <title>Mauricio Gonzalez | Home</title>
        <meta
          name="description"
          content="Mauricio Gonzalez' Portfolio Website! Get to know about me and my projects,"
        />
        <link rel="stylesheet" href="https://use.typekit.net/qzg3egg.css" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
}
