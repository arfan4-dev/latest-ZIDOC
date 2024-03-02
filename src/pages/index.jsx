import Head from "next/head";
import { SITE_TITLE } from "@/lib/constants";
import HomePage from "@/components/layout/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${SITE_TITLE}`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
