import Head from "next/head";
import PageNotFound from "../components/others/404";

function pageNotFound() {
  return (
    <>
      <Head>
        <title>Page not found - Go back.</title>
        <meta name="description" content="Welcome to Normalized nerd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageNotFound />
    </>
  );
}

export default pageNotFound;
