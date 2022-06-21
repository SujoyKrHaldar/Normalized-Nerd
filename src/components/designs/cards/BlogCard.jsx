import Link from "next/link";
import Moment from "react-moment";
import { urlFor } from "../../../../api/sanity";
import Img from "../others/Img";

function BlogCard({ data }) {
  return (
    <>
      <div
        className="border-[1px] w-full sm:w-auto border-black flex items-end  
      duration-300 h-[250px] md:h-[320px] group hover:scale-105 hover:shadow-xl"
      >
        <div className="absolute inset-0  w-full h-full flex items-center justify-center bg-black">
          {data?.mainImage && (
            <Img
              src={urlFor(data?.mainImage).url()}
              alt={data.title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div
          className="border-[1px] border-black max-w-[270px] bg-white 
        p-4 -mb-4 group-hover:mb-4 -translate-x-2 shadow-lg group-hover:shadow-2xl 
        group-hover:-translate-x-1 "
        >
          <p className="text-base">
            <Moment format="MMMM Do YYYY">
              {data.publishedAt || new Date()}
            </Moment>
          </p>

          <p className="font-bold mb-2 text-xl">{data.title}</p>
          <Link href="/blogs/[slug]" as={`/blogs/${data.slug}`}>
            <a className="inline-block">Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
