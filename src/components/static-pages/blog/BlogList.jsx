import BlogCard from "../../designs/cards/BlogCard";
import Container from "../../layout/Container";

function BlogList({ data }) {
  return (
    <>
      <div className="w-full h-auto">
        <div className="absolute inset-0 w-full h-[50vh] bg-[#f2c744]"></div>
        <Container className="pt-[12rem] pb-10">
          <h2 className="mb-2">
            All <span className="font-bold">Articles</span>
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-x-4 gap-y-8 ">
            {data.map((d) => (
              <BlogCard key={d.id} data={d} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default BlogList;
