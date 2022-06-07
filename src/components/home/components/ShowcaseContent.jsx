import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";

function ShowcaseContent() {
  return (
    <>
      <div className="max-w-lg">
        <p className="flex items-center text-[#ef4444] mb-2 text-[2rem]">
          <AiFillYoutube />
        </p>
        <h2 className="mb-4 ">
          Start <span className="font-bold">Learning</span> with me by{" "}
          <span className="font-bold">Subscribing</span> to this{" "}
          <span className="font-bold text-red-500">Channel ❤</span>
        </h2>
        <p>
          I love to create educational videos on Machine Learning and Creative
          Coding. Machine learning and Data Science have changed our world
          dramatically and will continue to do so. But how do they work? What
          really happens behind the curtains?
        </p>

        <Link href="https://www.youtube.com/c/NormalizedNerd">
          <a target="_blank" className="btn mt-8 bg-[#ef4444] text-white">
            Check my channel
          </a>
        </Link>
      </div>
    </>
  );
}

export default ShowcaseContent;
