import Head from "next/head";
import Blog from "../components/home/Blog";
import Landing from "../components/home/Landing";
import Projects from "../components/home/Projects";
import Videos from "../components/home/Videos";
import YtShowcase from "../components/home/YtShowcase";
import Layout from "../components/layout/Layout";

import { sanityClient } from "../../api/sanity";
import { getAllVideos, getAllBlogs, getAllProjects } from "../../api/query";
import Contact from "../components/home/Contact";

export const getStaticProps = async () => {
  const videos = await sanityClient.fetch(getAllVideos);
  const blogs = await sanityClient.fetch(getAllBlogs);
  const projects = await sanityClient.fetch(getAllProjects);

  return {
    props: { videos, blogs, projects },
    revalidate: 10,
  };
};

export default function Home({ videos, blogs, projects }) {
  return (
    <>
      <Head>
        <title>Welcome to Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <YtShowcase />
        <Videos data={videos} />
        <Blog data={blogs} />
        <Projects data={projects} />
        <Contact />
      </Layout>
    </>
  );
}
