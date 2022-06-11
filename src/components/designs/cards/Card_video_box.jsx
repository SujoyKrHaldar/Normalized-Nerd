import Link from "next/link";
import Moment from "react-moment";
import { BsPlayFill } from "react-icons/bs";
import { urlFor } from "../../../../api/sanity";
import Img from "../others/Img";

function Card_video_box({ data }) {
  return (
    <>
      <Link href={`/videos/${data.slug}`}>
        <a className="group hover:scale-105 hover:shadow-lg">
          <div className="w-full h-[180px] bg-[#c8c8c8]">
            <Img
              src={urlFor(data.mainImage).url()}
              alt={data.title}
              layout="fill"
              objectFit="cover"
            />
            <div
              className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-10 text-4xl
             text-white duration-300 group-hover:scale-110 cursor-pointer"
            >
              <BsPlayFill />
            </div>
          </div>
          <div className="p-4 border-[1px] border-[#c8c8c8] group-hover:border-white">
            <p className="font-bold max-w-md text-left mb-[0.3rem]">
              {data.title}
            </p>
            <p className="text-base">
              <Moment format="MMMM Do YYYY">{data.publishedAt}</Moment>
            </p>
          </div>
        </a>
      </Link>
    </>
  );
}

export default Card_video_box;
