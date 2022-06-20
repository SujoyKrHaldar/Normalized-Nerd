import Container from "../../layout/Container";

function ProjectList({ data }) {
  return (
    <>
      <div className="w-full h-[250px] bg-[#f2c744] py-8">
        <Container className="flex items-end">
          <div className="max-w-lg">
            <h1 className="font-bold">Projects</h1>
          </div>
        </Container>
      </div>

      {/* <div className="py-16">
        <Container className="flex items-center justify-start gap-x-4 flex-wrap gap-y-8">
          {data.map((d) => (
            <CardblogBox key={d.id} data={d} />
          ))}
        </Container>
      </div> */}
    </>
  );
}

export default ProjectList;
