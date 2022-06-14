import Head from "next/head";
import Layout from "../components/layout/Layout";
import Landing from "../components/faq/Landing";
import { sanityClient } from "../../api/sanity";
import { getAllFaqs } from "../../api/query";
import Faqs from "../components/faq/Faqs";

export const getStaticProps = async () => {
  const faq = await sanityClient.fetch(getAllFaqs);

  return {
    props: { faq },
    revalidate: 10,
  };
};

function faqs({ faq }) {
  return (
    <>
      <Head>
        <title>Faqs - Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <Faqs data={faq} />
      </Layout>
    </>
  );
}

export default faqs;
