import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import Container from "../layout/Container";
import ProjectList from "./components/ProjectList";

function Projects({ data }) {
  return (
    <>
      <div className="w-full h-full py-16">
        <Container>
          <p className="flex items-center text-[#597bb1] mb-2 text-[1.3rem]">
            <GrProjects />
          </p>
          <h2 className="mb-2">
            Featured <span className="font-bold">Projects</span>.
          </h2>
          <p className="mb-8">
            I love to create projects on machine learning related topics. Check
            it
          </p>

          <ProjectList data={data} />

          <Link href="/projects">
            <a className="btn inline-block mt-8 bg-[#1b1b1b] text-white">
              View all
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Projects;
