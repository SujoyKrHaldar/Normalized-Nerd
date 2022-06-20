import ReactPlayer from "react-player/youtube";

export default function VideoPlayer({
  className,
  url,
  autoplay = true,
  showThumbnail,
}) {
  return (
    <>
      <div className={className}>
        <ReactPlayer
          controls={true}
          playing={autoplay}
          muted={false}
          width="100%"
          height="100%"
          url={url}
        />
      </div>
    </>
  );
}
