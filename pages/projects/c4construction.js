/* eslint-disable @next/next/no-img-element */
import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { ProjectData } from "../../components/Projects/ProjectData";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Qtax() {
  const c4 = ProjectData[1];

  return (
    <div className={utilStyles.containerLg}>
      <Head>
        <title>Mauricio Gonzalez | C4 Project</title>
      </Head>
      <Navbar />
      <motion.div
        className={`${utilStyles.containerMd} ${utilStyles.mb}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "circOut", duration: 0.5, delay: 0.2 }}
      >
        <div className={utilStyles.pb}>
          <h1 className={`${utilStyles.textCenter} ${utilStyles.headingLg}`}>
            {c4.title}
          </h1>
          <Link href={`${c4.site}`}>
            <a
              className={`${utilStyles.textCenter} ${utilStyles.mb}`}
              target="_blank"
            >
              <p>Link to Site</p>
            </a>
          </Link>
        </div>
        <div className={utilStyles.centered}></div>
        <img
          className={utilStyles.image}
          src={`${c4.thumbnail}`}
          alt="screenshot of the project's website"
        />

        <p className={utilStyles.copy}>
          C4 Constuction is a company located in the North Houston area bringing
          a wide variety of construction services. The client did not have a
          website, so I helped with the whole process, from design to coding and
          finally, deployment and hosting.
        </p>
        <p className={utilStyles.copy}>
          I used{" "}
          <span className={utilStyles.highlight}>Vanilla JavaScript</span> and{" "}
          <span className={utilStyles.highlight}>BootStrap</span> for this
          project. The client wanted a homepage where they can showcase their
          projects and a new entry for people to communicate with them.
        </p>
        <p className={utilStyles.copy}>
          These points were achieved by creating a gallery page and contact
          sections where interested people can contact the company.
          Additionally, I setup a business email for them with the website{`'`}s
          domain giving them the professionalism every business needs.
        </p>
      </motion.div>
      <Contact />
      <Footer />
    </div>
  );
}
