import Head from "next/head";
import { getAllProjects } from "../../api/query";
import { sanityClient } from "../../api/sanity";
import Layout from "../components/layout/Layout";
import ProjectList from "../components/static-pages/project/ProjectList";

export const getStaticProps = async () => {
  const projects = await sanityClient.fetch(getAllProjects);

  return {
    props: { projects },
    revalidate: 10,
  };
};

function projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects - Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ProjectList data={projects} />
      </Layout>
    </>
  );
}

export default projects;
