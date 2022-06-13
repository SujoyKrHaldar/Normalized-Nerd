import { DiscussionEmbed } from "disqus-react";
import Container from "../layout/Container";

function BlogComment({ data }) {
  // const disqusShortname = "normalizednerd";

  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${data.slug}`,
    identifier: data.slug,
    title: data.title,
  };
  return (
    <>
      <Container>
        <div className="max-w-3xl mx-auto  bg-gray">
          <DiscussionEmbed
            shortname={process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME}
            config={disqusConfig}
          />
        </div>
      </Container>
    </>
  );
}

export default BlogComment;
