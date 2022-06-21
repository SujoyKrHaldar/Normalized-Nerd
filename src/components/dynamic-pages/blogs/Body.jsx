import BlogComment from "./BlogComment";
import BlogTexts from "./components/BlogTexts";
import Landing from "./components/Landing";
import OtherBlogs from "./OtherBlogs";

function Body({ data, others }) {
  return (
    <>
      <div className="py-16 w-full h-auto">
        <div className="bg-[#f2c744] w-full h-[80vh] absolute inset-0 "></div>
        <Landing data={data} />
        <BlogTexts data={data} />
        <OtherBlogs data={others} />
        <BlogComment data={data} />
      </div>
    </>
  );
}

export default Body;
