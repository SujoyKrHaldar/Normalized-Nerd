import Link from "next/link";
import { MdVideoLibrary } from "react-icons/md";
import Container from "../layout/Container";
import VideoList from "./components/VideoList";

function Videos({ data }) {
  return (
    <>
      <div className="w-full h-full py-16">
        <Container>
          <p className="flex items-center text-[#597bb1] mb-2 text-[2rem]">
            <MdVideoLibrary />
          </p>
          <h2 className="mb-2">
            Latest <span className="font-bold">YT uploads</span>.
          </h2>
          <p className="mb-8">
            I love to create videos on machine learning related topics. Check it
            out.
          </p>

          <VideoList data={data} />

          <div className="mt-8 flex gap-2">
            <Link href="/videos">
              <a className="btn inline-block bg-[#597bb1] text-white">
                View all
              </a>
            </Link>
            <Link href="https://www.youtube.com/c/NormalizedNerd/playlists">
              <a
                target="_blank"
                className="btn inline-block bg-[#eeeeee] text-black"
              >
                View youtube
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Videos;
