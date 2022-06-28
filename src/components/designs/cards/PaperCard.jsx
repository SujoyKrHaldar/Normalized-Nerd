import Moment from "react-moment";
import { AiOutlinePaperClip } from "react-icons/ai";

function PaperCard({ data }) {
  return (
    <>
      <div className="bg-white flex flex-col justify-end shadow-md hover:shadow-xl p-8  max-w-3xl">
        <div className="text-2xl absolute top-0 left-0 p-4">
          <AiOutlinePaperClip />
        </div>
        <div className="pt-8">
          <p className="text-2xl mb-4 font-bold">{data.title}</p>

          <p className="text-sm text-[#696969]">
            <Moment format="MMMM Do YYYY">
              {data?.publishedAt || new Date()}
            </Moment>
          </p>

          <a target="_blank" className="font-bold" href={data.link}>
            Read paper
          </a>
        </div>
      </div>
    </>
  );
}

export default PaperCard;
