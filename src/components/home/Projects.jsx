import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import Container from "../layout/Container";
import ProjectList from "./components/ProjectList";

function Projects({ data }) {
  return (
    <>
      <div className="w-full h-full py-16">
        <div className="absolute top-[-10rem] left-0 -z-10 w-full h-auto ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f2c744"
              fillOpacity="1"
              d="M0,288L80,266.7C160,245,320,203,480,176C640,149,800,139,960,165.3C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <Container>
          <p className="flex items-center text-[#597bb1] mb-2 text-[1.3rem]">
            <GrProjects />
          </p>
          <h2 className="mb-2">
            Featured <span className="font-bold">Projects</span>.
          </h2>
          <p>
            I love to create projects on machine learning related topics. Check
            it
          </p>

          <ProjectList data={data} />

          <Link href="/projects">
            <a className="btn inline-block mt-8 bg-[#eeeeee] text-black">
              View all
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Projects;
