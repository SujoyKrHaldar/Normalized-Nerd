import { BiCodeAlt } from "react-icons/bi";

function ProjectCard({ data }) {
  return (
    <>
      <div
        className="group p-4 bg-white border-2 border-transparent hover:border-green-500 rounded-lg shadow-lg"
        key={data.id}
      >
        <div className="flex items-center mb-4 text-5xl text-black group-hover:text-green-500 duration-100">
          <BiCodeAlt />
        </div>
        <p className="font-medium mb-4">{data.name}</p>

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
    </>
  );
}

export default ProjectCard;
