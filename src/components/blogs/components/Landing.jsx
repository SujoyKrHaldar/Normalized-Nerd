import Img from "../../designs/others/Img";
import Moment from "react-moment";
import { urlFor } from "../../../../api/sanity";
import Container from "../../layout/Container";

function Landing({ data }) {
  return (
    <>
      <Container>
        <div className="mx-auto max-w-3xl mb-12 mt-24">
          <p className="mb-4 text-black text-base bg-white px-4 py-1.5 border-l-2 border-black inline-block">
            <Moment format="MMMM Do YYYY">{data.publishedAt}</Moment>
          </p>
          <h1 className="font-bold mb-4">{data.title}</h1>
          <p className="mb-4 max-w-lg">{data?.description}</p>
          <p className="text-[#0000009c]">#COMPOSABLE ARCHITECTURE</p>
        </div>

        <div className="bg-[#faebd7] border-[1px] border-black">
          <Img
            src={urlFor(data?.mainImage).url()}
            alt={data.title}
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="cover"
            className="w-full"
          />
        </div>
      </Container>
    </>
  );
}

export default Landing;
