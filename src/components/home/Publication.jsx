import { FaRegNewspaper } from "react-icons/fa";
import Link from "next/link";
import Container from "../layout/Container";
import PublicationList from "./components/PublicationList";

function Publication({ data }) {
  return (
    <>
      <div className="w-full h-full py-16">
        <Container>
          <p className="flex items-center text-black mb-2 text-[2rem]">
            <FaRegNewspaper />
          </p>
          <h2 className="mb-8">
            Whats <span className="font-bold">New.</span>
          </h2>

          <PublicationList data={data} />

          <Link href="/papers">
            <a className="btn inline-block mt-8 bg-[#000000] text-white">
              Read more
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Publication;
