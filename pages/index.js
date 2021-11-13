import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mauricio Gonzalez</title>
        <meta
          name="description"
          content="Mauricio Gonzalez' Portfolio Website! Get to know about me and my projects,"
        />
        <link rel="stylesheet" href="https://use.typekit.net/qzg3egg.css" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
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
