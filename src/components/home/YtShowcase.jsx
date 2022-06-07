import Image from "next/image";
import Container from "../layout/Container";
import ShowcaseContent from "./components/ShowcaseContent";

function YtShowcase() {
  return (
    <>
      <div className="w-full h-[720px] py-16 overflow-x-hidden">
        <div className="absolute inset-0 -z-30 w-full h-auto border-x-4 border-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f2c744"
              fillOpacity="1"
              d="M0,32L80,26.7C160,21,320,11,480,58.7C640,107,800,213,960,261.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <Container className="flex items-center">
          <ShowcaseContent />

          <div className="absolute w-full shadow-2xl max-w-[69%] h-[560px] top-0 right-0 translate-x-[30%] rotate-[356deg] ">
            <Image
              src="/assets/images/yt.png"
              alt="youtube"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default YtShowcase;
