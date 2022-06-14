import Link from "next/link";
import Moment from "react-moment";
import { urlFor } from "../../../../api/sanity";
import Img from "../others/Img";

function CardblogBox({ data }) {
  return (
    <>
      <div className="flex items-end  duration-300 h-[320px] group hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0  w-full h-full flex items-center justify-center">
          <Img
            src={urlFor(data.mainImage).url()}
            alt={data.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-[270px] bg-white p-4 -mb-4 group-hover:mb-4 -translate-x-2 shadow-lg group-hover:shadow-2xl group-hover:-translate-x-1 ">
          <p className="text-base">
            <Moment format="MMMM Do YYYY">{data.publishedAt}</Moment>
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

export default CardblogBox;
