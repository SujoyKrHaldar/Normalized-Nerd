import { BiLinkExternal } from "react-icons/bi";

function PublicationCard() {
  return (
    <>
      <div className="flex items-center justify-between gap-4 bg-[#303030] text-white mb-4 last:mb-0 p-8 max-w-3xl">
        <p className="text-2xl font-bold">
          Some of my paper publication names.
        </p>
        <div className="flex items-center justify-end gap-4">
          <p className="text-sm">20th June 2022</p>

          <div className="flex items-center cursor-pointer bg-white text-black text-2xl">
            <BiLinkExternal />
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicationCard;
