import Head from "next/head";
import { motion } from "framer-motion";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";

export default function Success() {
  return (
    <div className={utilStyles.containerLg}>
      <Navbar />
      <div className={utilStyles.centered}>
        <div>
          <h1>
            Thank you for the message, I will get back to you as soon as
            possible!
          </h1>
          <Link href="/">
            <a>
              <u>Back to home</u>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
