import VideoCard from "../../designs/cards/VideoCard";

function VideoList({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data.slice(0, 4).map((data) => (
          <VideoCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default VideoList;
