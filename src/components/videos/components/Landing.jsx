import Moment from "react-moment";
import Container from "../../layout/Container";
import VideoPlayer from "../../tools/Video-player/VideoPlayer";

function Landing({ data }) {
  console.log(data.tags);
  return (
    <>
      <Container>
        <div className="mx-auto max-w-3xl mb-12 mt-24">
          <p className="mb-4 text-black text-base bg-white px-4 py-1.5 border-l-2 border-black inline-block">
            <Moment format="MMMM Do YYYY">{data.publishedAt}</Moment>
          </p>
          <h1 className="font-bold mb-4">{data.title}</h1>
          <p className="mb-4 max-w-lg">{data?.description}</p>
          {/* {data?.tags.map((tag, id) => (
            <p key={id} className="text-sm font-bold">
              {tag}
            </p>
          ))} */}
        </div>

        <VideoPlayer className="w-full h-[500px]" url={data?.video_url} />
      </Container>
    </>
  );
}

export default Landing;
