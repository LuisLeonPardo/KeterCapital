import Head from "next/head";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Keter Capital</title>
        <meta
          name="description"
          content="Keter Capital:`You dream it, we invest´"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Landing />
      </>
    </>
  );
}
