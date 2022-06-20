import Container from "../../layout/Container";
import VideoCard from "../../designs/cards/VideoCard";

function OtherVideos({ data }) {
  return (
    <>
      <div className="w-full h-full py-16 bg-[#ebebeb] ">
        <Container>
          <h2 className="mb-8">
            Other <span className="font-bold">Videos</span>
          </h2>

          <div className="flex items-center justify-start gap-4 text-left">
            {data.slice(0, 4).map((data) => (
              <VideoCard key={data.id} data={data} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default OtherVideos;
