import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { IoMdDocument } from "react-icons/io";

function LandingContent() {
  return (
    <>
      <div className="max-w-xl py-4">
        <p>Hello, People from the future</p>
        <h1>
          I am <span className="font-bold">Sujan Dutta</span>
        </h1>

        <h2>
          aka the <span className="font-bold">Normalized Nerd</span>.
        </h2>
        {/* <p className="mt-2 max-w-[360px]">
          I love to create educational videos on Machine Learning and Creative
          Coding. Start learning with me.
        </p> */}

        {/* <div className="flex items-center justify-start gap-4 mt-4">
          <a
            className="btn bg-[#ef4444] text-white flex items-center gap-2"
            target="_blank"
            href="mailto:sujan99dutta@gmail.com"
          >
            <div className="flex items-center">
              <HiMail />
            </div>
            Contact me{" "}
          </a>
          <a
            className="flex btn bg-[#ef4444] text-white  items-center gap-2"
            target="_blank"
            href="/Resume_Sujan_Dutta.pdf"
          >
            <div className="flex items-center">
              <IoMdDocument />
            </div>
            Resume
          </a>
        </div> */}
      </div>
    </>
  );
}

export default LandingContent;
