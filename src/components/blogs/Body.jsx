import Container from "../layout/Container";
import BlogTexts from "./components/BlogTexts";
import Landing from "./components/Landing";
import SampleDesign from "./components/SampleDesign";

function Body() {
  return (
    <>
      <div className="py-16 w-full h-auto">
        <SampleDesign />
        <Container>
          <Landing />
          <BlogTexts />
        </Container>
      </div>
    </>
  );
}

export default Body;
