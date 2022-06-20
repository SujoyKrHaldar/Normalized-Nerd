import Head from "next/head";
import { sanityClient } from "../../api/sanity";
import Layout from "../components/layout/Layout";
import ProjectList from "../components/static-pages/project/ProjectList";

function projects() {
  let data = {};
  return (
    <>
      <Head>
        <title>Projects - Normalized nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ProjectList data={data} />
      </Layout>
    </>
  );
}

export default projects;
