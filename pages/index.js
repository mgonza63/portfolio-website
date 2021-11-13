import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/Navbar";
import utilStyles from "../styles/utils.module.css";

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
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Mauricio Gonzalez Portafolio
      </motion.h1>
    </div>
  );
}
