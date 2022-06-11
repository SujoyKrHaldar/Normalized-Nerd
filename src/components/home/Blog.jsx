import Link from "next/link";
import { RiFileList3Fill } from "react-icons/ri";
import Container from "../layout/Container";
import BlogList from "./components/BlogList";

function Blog({ data }) {
  return (
    <>
      <div className="w-full h-full py-16 bg-[#f2c744]">
        <Container>
          <p className="flex items-center text-black mb-2 text-[2rem]">
            <RiFileList3Fill />
          </p>
          <h2 className="mb-2">
            Latest <span className="font-bold">Articles</span>.
          </h2>
          <p className="mb-8">
            Read my latest blogs and let me know is it helpfull or not!
          </p>

          <BlogList data={data} />

          <Link href="/blogs">
            <a className="btn inline-block mt-8 bg-[#eeeeee] text-black">
              Read more
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Blog;
