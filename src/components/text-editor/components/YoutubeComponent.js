import VideoPlayer from "../../designs/others/VideoPlayer";

function YoutubeComponent({ value }) {
  return (
    <div className="w-full h-[400px] my-8">
      <VideoPlayer url={value.url} showThumbnail={false} autoplay={false} />
    </div>
  );
}

export default YoutubeComponent;
