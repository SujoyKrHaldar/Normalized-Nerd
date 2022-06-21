import { BiCodeAlt } from "react-icons/bi";

function ProjectCard({ data }) {
  return (
    <>
      <div
        className=" h-auto md:h-[250px] group p-4 bg-white border-2 border-[#cfcfcf] hover:border-black 
        rounded-lg shadow-lg flex flex-col justify-between items-start"
        key={data.id}
      >
        <div className="flex items-center mb-4 text-5xl text-[#cfcfcf] group-hover:text-black duration-100">
          <BiCodeAlt />
        </div>
        <div className="">
          <p className="font-bold mb-4">{data.name}</p>

          <div className="flex items-center justify-start gap-4">
            {data.links.map((url, id) => (
              <a
                className="text-sm font-bold"
                href={url.url}
                key={id}
                target="_blank"
              >
                {url.UrlProvider}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
