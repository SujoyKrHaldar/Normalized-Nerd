import Container from "../layout/Container";

function Landing() {
  return (
    <>
      <div className="w-full h-[400px] bg-[#f2c744] py-16">
        <div className="absolute w-full h-[150px] -bottom-2 left-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f2c744"
              fillOpacity="1"
              d="M0,128L120,128C240,128,480,128,720,144C960,160,1200,192,1320,208L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>
        <Container className="flex items-end">
          <div className="max-w-lg">
            <p className="mb-2">Faq</p>
            <h1>
              Find the answers to all of our most{" "}
              <span className="font-bold">Frequently Asked Questions</span>.
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
