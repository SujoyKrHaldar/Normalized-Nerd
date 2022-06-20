import BlogCard from "../../designs/cards/BlogCard";

function BlogList({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(0, 4).map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default BlogList;
