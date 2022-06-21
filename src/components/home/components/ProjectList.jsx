import ProjectCard from "../../designs/cards/ProjectCard";

function ProjectList({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.slice(0, 4).map((data) => (
          <ProjectCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default ProjectList;
