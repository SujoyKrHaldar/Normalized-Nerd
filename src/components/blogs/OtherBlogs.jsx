import CardblogBox from "../designs/cards/Card_blog_Box";
import Container from "../layout/Container";

function OtherBlogs({ data }) {
  return (
    <>
      <div className="w-full h-full py-16 bg-[#f2c744] mb-16 text-center">
        <Container>
          <p>Blog</p>
          <h2 className="mb-8">
            Other <span className="font-bold">Articles</span>
          </h2>

          <div className="flex items-center justify-center gap-4 text-left">
            {data.slice(0, 4).map((data) => (
              <CardblogBox key={data.id} data={data} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default OtherBlogs;
