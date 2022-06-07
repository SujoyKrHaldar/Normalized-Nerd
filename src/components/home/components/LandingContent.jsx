import Link from "next/link";

function LandingContent() {
  return (
    <>
      <div className="max-w-xl py-4">
        <p className="mt-4 ">Hello, People from the future</p>
        <h1>
          I am <span className="font-bold">Sujan Dutta</span>{" "}
          <span className="block">
            aka the <span className="font-bold">Normalized Nerd</span>.
          </span>
        </h1>
        <p className="mt-4 max-w-[300px]">
          I love to create educational videos on Machine Learning and Creative
          Coding. Start learning with me.
        </p>

        <p className="font-medium mt-4 text-lg cursor-pointer">👋🏻 Say hi</p>
      </div>
    </>
  );
}

export default LandingContent;
