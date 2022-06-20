import Head from "next/head";
import { getAllVideos } from "../../../api/query";
import { sanityClient } from "../../../api/sanity";
import Layout from "../../components/layout/Layout";
import VideoList from "../../components/static-pages/video/VideoList";

export const getStaticProps = async () => {
  const videos = await sanityClient.fetch(getAllVideos);

  return {
    props: { videos },
    revalidate: 10,
  };
};

function index({ videos }) {
  return (
    <>
      <Head>
        <title>Videos - Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <VideoList data={videos} />
      </Layout>
    </>
  );
}

export default index;
