import { BiLinkExternal } from "react-icons/bi";
import Moment from "react-moment";

function PublicationCard({ data }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4 bg-[#303030] text-white mb-4 last:mb-0 p-8 max-w-3xl">
        <p className="text-2xl font-bold">{data.title}</p>
        <div className="flex items-center justify-end gap-4">
          <p className="text-sm">
            <Moment format="MMMM Do YYYY">
              {data?.publishedAt || new Date()}
            </Moment>
          </p>

          <a
            target="_blank"
            href={data.link}
            className="flex items-center cursor-pointer bg-white text-black text-2xl"
          >
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </>
  );
}

export default PublicationCard;
