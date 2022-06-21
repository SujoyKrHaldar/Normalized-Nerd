import BlogCard from "../../designs/cards/BlogCard";

function BlogList({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-x-4 gap-y-8">
        {data.slice(0, 4).map((data) => (
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default BlogList;
