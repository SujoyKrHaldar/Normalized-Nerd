import { DiscussionEmbed } from "disqus-react";
import Script from "next/script";

function BlogComment() {
  const disqusShortname = "normalizednerd";

  const disqusConfig = {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    identifier: "123",
    title: "Demo Post",
  };
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </>
  );

  //   return (
  //     <>
  //       <div id="disqus_thread"></div>
  //       <Script>
  //         {`
  //     var disqus_config = function () {
  //     this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
  //     this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  //     };
  //     */
  //     (function() { // DON'T EDIT BELOW THIS LINE
  //     var d = document, s = d.createElement('script');
  //     s.src = 'https://normalizednerd.disqus.com/embed.js';
  //     s.setAttribute('data-timestamp', +new Date());
  //     (d.head || d.body).appendChild(s);
  //     })();
  // `}
  //       </Script>
  //       <noscript>
  //         Please enable JavaScript to view the{" "}
  //         <a href="https://disqus.com/?ref_noscript">
  //           comments powered by Disqus.
  //         </a>
  //       </noscript>
  //     </>
  //   );
}

export default BlogComment;
