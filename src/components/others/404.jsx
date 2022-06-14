import Img from "../designs/others/Img";
import Container from "../layout/Container";
import Link from "next/link";

function PageNotFound() {
  return (
    <>
      <div className="w-full h-screen py-16">
        <div className="absolute inset-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffdb74"
              fillOpacity="1"
              d="M0,288L60,272C120,256,240,224,360,186.7C480,149,600,107,720,80C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <Container className=" flex items-center">
          <div className="text-center max-w-lg mx-auto">
            <div className="w-[300px] h-[300px] mx-auto mb-2">
              <Img
                src="/assets/images/404.svg"
                alt="profilepic"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <h1 className="mb-2">Something is Wrong.</h1>
            <p className="mb-4">
              The page you are looking for was moved, removed, renamed or might
              never exists.
            </p>
            <Link href="/">
              <a className="btn inline-block mb-4 bg-black text-white">
                Back to home
              </a>
            </Link>
            <p className="text-base text-[#a6a6a6]">or</p>
            <p className="mb-4 ">Navigate to</p>
            <div className="flex items-center justify-center gap-2">
              <Link href="/blogs">
                <a className="btn inline-block bg-[#ffdb74]">Blogs</a>
              </Link>

              <Link href="/videos">
                <a className="btn inline-block bg-[#ffdb74] ">Videos</a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default PageNotFound;
