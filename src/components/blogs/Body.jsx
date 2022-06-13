import Container from "../layout/Container";
import BlogComment from "./BlogComment";
import BlogTexts from "./components/BlogTexts";
import Landing from "./components/Landing";
import SampleDesign from "./components/SampleDesign";

function Body({ data, others }) {
  return (
    <>
      <div className="py-16 w-full h-auto">
        <SampleDesign />
        <Container>
          <Landing data={data} />
          <BlogTexts data={data} others={others} />
          {/* <BlogComment /> */}
        </Container>
      </div>
    </>
  );
}

export default Body;
