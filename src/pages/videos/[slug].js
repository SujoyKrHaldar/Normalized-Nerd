import Head from "next/head";
import Body from "../../components/dynamic-pages/videos/Body";
import Layout from "../../components/layout/Layout";

import {
  getAllVideoSlugs,
  getOtherVideos,
  getvideoBySlug,
} from "../../../api/query";
import { sanityClient } from "../../../api/sanity";

export async function getStaticPaths() {
  const allSlugs = await sanityClient.fetch(getAllVideoSlugs);

  const paths = allSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const video = await sanityClient.fetch(getvideoBySlug, {
    slug: params.slug,
  });

  const otherVideos = await sanityClient.fetch(getOtherVideos, {
    slug: params.slug,
  });

  // if (!video) {
  //   return {
  //     redirect: {
  //       destination: "/explore",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      video,
      otherVideos,
    },
    revalidate: 10,
  };
}

function slug({ video, otherVideos }) {
  return (
    <>
      <Head>
        <title>{video.title} - Normalized Nerd</title>
        <meta name="description" content={video?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Body data={video} others={otherVideos} />
      </Layout>
    </>
  );
}

export default slug;
