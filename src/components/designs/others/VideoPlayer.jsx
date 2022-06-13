import ReactPlayer from "react-player/lazy";

function VideoPlayer({ url, autoplay, showThumbnail }) {
  return (
    <>
      <ReactPlayer
        controls={true}
        playing={autoplay}
        muted={false}
        width="100%"
        height="100%"
        light={showThumbnail}
        url={url}
      />
    </>
  );
}

export default VideoPlayer;
