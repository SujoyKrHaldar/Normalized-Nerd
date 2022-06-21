import VideoCard from "../../designs/cards/VideoCard";

function VideoList({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.slice(0, 4).map((data) => (
          <VideoCard data={data} key={data.id} className=" flex-[0_1_300px]" />
        ))}
      </div>
    </>
  );
}

export default VideoList;
