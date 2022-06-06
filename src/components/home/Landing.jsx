import Container from "../layout/Container";

function Landing() {
  return (
    <>
      <div className="w-full h-screen bg-[#f2c744] border-4 border-white">
        <Container className="flex items-center justify-start">
          <div className="max-w-xl py-4">
            <p className="mt-4 ">Hello, People from the future</p>
            <h1>
              I am <span className="font-bold">Sujan Dutta</span>{" "}
              <span className="block">
                aka the <span className="font-bold">Normalized Nerd</span>.
              </span>
            </h1>
            <p className="mt-4 max-w-[300px]">
              I love to create educational videos on Machine Learning and
              Creative Coding. Start learning with me.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
