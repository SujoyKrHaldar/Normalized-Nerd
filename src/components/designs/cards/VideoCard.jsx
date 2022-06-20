import Link from "next/link";
import Moment from "react-moment";
import { BsPlayFill } from "react-icons/bs";
import { urlFor } from "../../../../api/sanity";
import Img from "../others/Img";

function VideoCard({ data }) {
  return (
    <>
      <>
        <div className="group bg-white shadow-lg hover:shadow-2xl  bg-white hover:bg-white">
          <div className="w-full h-[180px] bg-[#c8c8c8]">
            <Img
              src={urlFor(data.mainImage).url()}
              alt={data.title}
              layout="fill"
              objectFit="cover"
            />
            <div
              className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-10 text-4xl
             text-white duration-300 group-hover:scale-110 "
            >
              <BsPlayFill />
            </div>
          </div>

          <div className="p-4">
            <p className="mb-2 font-bold">{data.title}</p>
            <p className="text-base mb-4 max-w-[350px]">
              {data.description.length > 95
                ? data.description.slice(0, 95) + "..."
                : data.description}
              {}
            </p>
            <div className="flex items-start justify-between gap-8 flex-wrap">
              <Link href="/videos/[slug]" as={`/videos/${data.slug}`}>
                <a className="font-bold">Watch</a>
              </Link>

              <p className="text-sm">
                <Moment format="MMMM Do YYYY">{data.publishedAt}</Moment>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default VideoCard;
