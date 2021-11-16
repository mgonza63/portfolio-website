/* eslint-disable @next/next/no-img-element */
import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { ProjectData } from "../../components/Projects/ProjectData";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
export default function Qtax() {
  const qtax = ProjectData[0];

  return (
    <div className={utilStyles.containerLg}>
      <Navbar />
      <div className={`${utilStyles.containerMd} ${utilStyles.mb}`}>
        <div className={utilStyles.pb}>
          <h1 className={`${utilStyles.textCenter} ${utilStyles.headingLg}`}>
            {qtax.title}
          </h1>
          <Link href={`${qtax.site}`}>
            <a className={`${utilStyles.textCenter} ${utilStyles.mb}`} target="_blank">
              <p>Link to Site</p>
            </a>
          </Link>
        </div>
        <div className={utilStyles.centered}></div>
        <img
          className={utilStyles.image}
          src={`${qtax.thumbnail}`}
          alt="screenshot of the project's website"
        />

        <p className={utilStyles.copy}>
          Qtax Multiservices is an accounting firm focused on spanish speaking
          people in the United States. They already had a website, but the
          design was <span className={utilStyles.highlight}>outdated</span> and
          they needed a <span className={utilStyles.highlight}>fresh look.</span>
        </p>
        <p className={utilStyles.copy}>
          I used <span className={utilStyles.highlight}>Alpine.js</span>, a
          lightweight, javascript framework similar to Vue, for this website. I
          experimented with it and thought it would be perfect to tackle this
          project. Netlify has always been my go-to hosting service and it
          worked great for this site. This might be my new setup for certain
          type of projects, but it is hard to beat Next.js.
        </p>
        <p className={utilStyles.copy}>
          I also helped in the marketing side, installing{" "}
          <span className={utilStyles.highlight}>Google Analytics</span> and{" "}
          <span className={utilStyles.highlight}>MailChimp</span> into the site.
          Additionally, I edited videos and posts for their social media.
        </p>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
