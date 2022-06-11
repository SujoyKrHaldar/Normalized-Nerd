import CardblogBox from "../../designs/cards/Card_blog_Box";

function BlogList({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(0, 4).map((data) => (
          <CardblogBox key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default BlogList;
