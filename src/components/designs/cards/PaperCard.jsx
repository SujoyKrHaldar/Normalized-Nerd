import Moment from "react-moment";

function PaperCard({ data }) {
  return (
    <>
      <div className="bg-white shadow-xl p-8 max-w-3xl">
        <p className="text-2xl font-bold">{data.title}</p>
        <div className="">
          <p className="text-sm">
            <Moment format="MMMM Do YYYY">
              {data?.publishedAt || new Date()}
            </Moment>
          </p>

          <a
            target="_blank"
            href={data.link}
            className="flex items-center cursor-pointer bg-white text-black "
          >
            Read paper
          </a>
        </div>
      </div>
    </>
  );
}

export default PaperCard;
