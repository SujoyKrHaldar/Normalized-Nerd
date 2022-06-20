import Container from "../../layout/Container";

function Landing() {
  return (
    <>
      <div className="w-full h-[300px] bg-[#f2c744] py-8">
        <Container className="flex items-end">
          <div className="max-w-lg">
            <p className="mb-2">Faq</p>
            <h2>
              Find the answers to all of our most{" "}
              <span className="font-bold">Frequently Asked Questions</span>.
            </h2>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
