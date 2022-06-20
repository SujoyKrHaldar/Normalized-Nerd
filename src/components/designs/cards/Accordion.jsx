import Moment from "react-moment";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BsQuestionSquareFill } from "react-icons/bs";
import RichTextEditor from "../../tools/text-editor/RichTextEditor";

function Accordion({ faq }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`max-w-4xl duration-200 px-8  border-[1px]
              hover:bg-slate-100 mb-4 last:mb-0 ${
                isActive
                  ? "border-black border-l-4 p-8 bg-slate-100 "
                  : "border-transparent p-4 bg-white border-slate-300 "
              }`}
      >
        <div
          className="flex items-center justify-between gap-4 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex items-start justify-start gap-3">
            <div className="text-2xl flex text-[#6289af] items-center">
              <BsQuestionSquareFill />
            </div>
            <p className="text-2xl font-bold ">{faq.question}</p>
          </div>

          <div
            className={`text-2xl flex items-center ${
              isActive ? "rotate-45" : ""
            }`}
          >
            <BiPlus />
          </div>
        </div>

        <div
          className={`overflow-hidden duration-200 ${
            isActive ? "h-auto mt-4 opacity-100" : "h-0 mt-0 opacity-0"
          }`}
        >
          <RichTextEditor value={faq.answer} />
          <p className="mt-4 text-base">
            <Moment format="MMMM Do YYYY">{faq?.createdAt}</Moment>
          </p>
        </div>
      </div>
    </>
  );
}

export default Accordion;
