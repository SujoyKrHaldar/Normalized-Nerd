import BlogComment from "./BlogComment";
import BlogTexts from "./components/BlogTexts";
import Landing from "./components/Landing";
import SampleDesign from "./components/SampleDesign";
import OtherBlogs from "./OtherBlogs";

function Body({ data, others }) {
  return (
    <>
      <div className="py-16 w-full h-auto">
        <SampleDesign />
        <Landing data={data} />
        <BlogTexts data={data} />
        <OtherBlogs data={others} />
        <BlogComment data={data} />
      </div>
    </>
  );
}

export default Body;
