import Head from "next/head";
import { getAllBlogs } from "../../../api/query";
import { sanityClient } from "../../../api/sanity";
import BlogList from "../../components/blog-index/BlogList";
import Landing from "../../components/blog-index/Landing";
import Layout from "../../components/layout/Layout";

export const getStaticProps = async () => {
  const blogs = await sanityClient.fetch(getAllBlogs);

  return {
    props: { blogs },
    revalidate: 10,
  };
};

function index({ blogs }) {
  return (
    <>
      <Head>
        <title>Articles - Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <BlogList data={blogs} />
      </Layout>
    </>
  );
}

export default index;
