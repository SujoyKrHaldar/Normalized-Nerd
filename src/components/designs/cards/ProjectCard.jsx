import Link from "next/link";
import { FaCodeBranch } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { urlFor } from "../../../../api/sanity";
import Img from "../others/Img";

function ProjectCard({ data }) {
  return (
    <>
      <div className=" h-auto md:h-[300px] group p-4  flex flex-col justify-between items-start">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#131313]">
          {data?.mainImage && (
            <Img
              src={urlFor(data?.mainImage).url()}
              alt={data.title}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>

        <div className="flex items-center justify-between gap-4 w-full">
          <div className="p-2 text-white text-2xl">
            <FaCodeBranch />
          </div>

          {data.link && (
            <a
              target="_black"
              href={data.link}
              className="p-2 text-white text-2xl"
            >
              <BsGithub />
            </a>
          )}
        </div>

        <div className="text-white">
          <p className="font-bold mb-4">{data.name}</p>
          <Link href={`/projects/${data.slug}`}>Read more</Link>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
