import Head from "next/head";
import Body from "../../components/blogs/Body";
import Layout from "../../components/layout/Layout";

function slug() {
  return (
    <>
      <Head>
        <title>Blog name - Normalized Nerd</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Body />
      </Layout>
    </>
  );
}

export default slug;
