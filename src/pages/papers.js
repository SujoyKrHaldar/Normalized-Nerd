import Head from "next/head";
import { sanityClient } from "../../api/sanity";
import { getAllPapers } from "../../api/query";
import Layout from "../components/layout/Layout";
import PaperList from "../components/static-pages/paper/PaperList";

export const getStaticProps = async () => {
  const papers = await sanityClient.fetch(getAllPapers);

  return {
    props: { papers },
    revalidate: 10,
  };
};

function papers({ papers }) {
  return (
    <>
      <Head>
        <title>Paper publications - Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <PaperList data={papers} />
      </Layout>
    </>
  );
}

export default papers;
