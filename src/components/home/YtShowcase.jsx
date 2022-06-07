import Image from "next/image";
import Container from "../layout/Container";
import ShowcaseContent from "./components/ShowcaseContent";

function YtShowcase() {
  return (
    <>
      <div className="w-full h-[720px] py-16 overflow-x-hidden">
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
