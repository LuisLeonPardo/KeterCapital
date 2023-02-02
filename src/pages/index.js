import Head from "next/head";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Keter Capital</title>
        <meta
          name="description"
          content="Keter Capital:`You dream it, we invest`"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <Landing />
      </>
    </>
  );
}
