import PaperCard from "../../designs/cards/PaperCard";
import Container from "../../layout/Container";

function PaperList({ data }) {
  return (
    <>
      <div className="w-full h-auto">
        <div className="absolute inset-0 w-full h-[50vh] bg-[#f2c744]"></div>
        <Container className="pt-[12rem] pb-10">
          <h2 className="mb-2">
            Paper <span className="font-bold">Publications</span>
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-x-4 gap-y-8 ">
            {data.map((d) => (
              <PaperCard key={d.id} data={d} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default PaperList;
