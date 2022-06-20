import CardblogBox from "../../designs/cards/Card_blog_Box";
import Container from "../../layout/Container";

function BlogList({ data }) {
  return (
    <>
      <div className="w-full h-[250px] bg-[#f2c744] py-8">
        <Container className="flex items-end">
          <div className="max-w-lg">
            <h1 className="font-bold">Articles</h1>
          </div>
        </Container>
      </div>

      <div className="py-16">
        <Container className="flex items-center justify-start gap-x-4 flex-wrap gap-y-8">
          {data.map((d) => (
            <CardblogBox key={d.id} data={d} />
          ))}
        </Container>
      </div>
    </>
  );
}

export default BlogList;
