import VideoCard from "../../designs/cards/VideoCard";
import Container from "../../layout/Container";

function VideoList({ data }) {
  return (
    <>
      <div className="w-full h-auto">
        <div className="absolute inset-0 w-full h-[50vh] bg-[#f2c744]"></div>
        <Container className="pt-[12rem] pb-10">
          <h2 className="mb-2">
            All <span className="font-bold">Videos</span>
          </h2>
          <div className="mt-4 grid grid-cols-4 gap-4 ">
            {data.map((d) => (
              <VideoCard key={d.id} data={d} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default VideoList;
