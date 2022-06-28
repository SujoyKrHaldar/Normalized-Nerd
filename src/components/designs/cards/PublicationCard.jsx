import Moment from "react-moment";
import { BsPaperclip } from "react-icons/bs";

function PublicationCard({ data }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 hover:shadow-xl hover:bg-[#ececec] bg-[#f3f3f3] mb-4 last:mb-0 px-8 py-1 pr-1 max-w-3xl">
        <div className="absolute text-xl -left-2 -top-2 -rotate-[45deg] text-[#7b7b7b]">
          <BsPaperclip />
        </div>
        <p className=" font-bold">{data.title}</p>
        <div className="flex items-center justify-end gap-4">
          <p className="text-sm text-[#3e3e3e]">
            <Moment format="MMMM Do YYYY">
              {data?.publishedAt || new Date()}
            </Moment>
          </p>

          <a
            target="_blank"
            href={data.link}
            className="btn cursor-pointer bg-white text-black "
          >
            Read paper
          </a>
        </div>
      </div>
    </>
  );
}

export default PublicationCard;
