import Link from "next/link";

function ShowcaseContent() {
  return (
    <>
      <div className="max-w-lg">
        <p className="mb-4 font-medium text-lg">
          Start learning with me by subscribing to this channel{" "}
          <span className="text-red-500">❤</span>.
        </p>
        <p>
          I love to create educational videos on Machine Learning and Creative
          Coding. Machine learning and Data Science have changed our world
          dramatically and will continue to do so. But how do they work? What
          really happens behind the curtains?
        </p>

        <Link href="https://www.youtube.com/c/NormalizedNerd">
          <a target="_blank" className="btn mt-8 bg-[#eeeeee] text-black">
            Check my channel
          </a>
        </Link>
      </div>
    </>
  );
}

export default ShowcaseContent;
