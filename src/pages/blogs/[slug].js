import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Body from "../../components/dynamic-pages/blogs/Body";

import { sanityClient } from "../../../api/sanity";
import {
  getAllBlogSlugs,
  getOtherBlogs,
  getBlogBySlug,
} from "../../../api/query";

export async function getStaticPaths() {
  const allSlugs = await sanityClient.fetch(getAllBlogSlugs);

  const paths = allSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = await sanityClient.fetch(getBlogBySlug, {
    slug: params.slug,
  });

  const otherBlogs = await sanityClient.fetch(getOtherBlogs, {
    slug: params.slug,
  });

  // if (!blog) {
  //   return {
  //     redirect: {
  //       destination: "/explore",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      blog,
      otherBlogs,
    },
    revalidate: 10,
  };
}
function slug({ blog, otherBlogs }) {
  return (
    <>
      <Head>
        <title>{blog.title} - Normalized Nerd</title>
        <meta name="description" content={blog?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Body data={blog} others={otherBlogs} />
      </Layout>
    </>
  );
}

export default slug;
