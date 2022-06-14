import CardblogBox from "../designs/cards/Card_blog_Box";
import Container from "../layout/Container";

function BlogList({ data }) {
  return (
    <>
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
