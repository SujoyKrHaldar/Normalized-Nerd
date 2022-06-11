import Card_video_box from "../../designs/cards/Card_video_box";

function VideoList({ data }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data.slice(0, 3).map((data) => (
          <Card_video_box data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default VideoList;
