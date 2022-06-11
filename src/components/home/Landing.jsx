import Container from "../layout/Container";
import Img from "../designs/others/Img";
import LandingContent from "./components/LandingContent";

function Landing() {
  return (
    <>
      <div className="w-full h-screen bg-[#f2c744]">
        <Container className="flex items-center justify-start">
          <div className="flex-1">
            <LandingContent />
          </div>
          <div className="flex-1">
            <div className="max-w-md ml-auto mr-0 h-[500px] ">
              <Img
                src="/assets/images/profile pic.jpg"
                alt="profilepic"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
