import ProjectCard from "../../designs/cards/ProjectCard";

function ProjectList({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {data.slice(0, 4).map((data) => (
          <ProjectCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default ProjectList;
