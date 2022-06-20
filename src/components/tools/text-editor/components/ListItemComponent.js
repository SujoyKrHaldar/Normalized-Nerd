import { IoMdArrowDropright } from "react-icons/io";

const ListItemComponent = {
  bullet: ({ children }) => (
    <p className="mb-4 last:mb-0 flex items-start justify-start gap-2">
      <div className=" pt-1">
        <IoMdArrowDropright />
      </div>
      <li>{children}</li>
    </p>
  ),
};

export default ListItemComponent;
