import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../data";

export default function Home({ services }) {
  return (
    // console.log(services, "services"),
    <div className={styles.container}>
      <Head>
        <title>Personal/Agency Website</title>
        <meta name="description" content="Generated by create ylmgrbz" />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = await data;
  return {
    props: {
      services,
    },
  };
};
