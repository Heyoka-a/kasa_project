import { useState } from "react";
import { ReactComponent as DropdownImg } from "../../assets/chevron-down-solid.svg";

function Dropdown({ title, text }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={handleOpen}
      className={`dropdown${open ? " dropdown-open" : ""}`}
    >
      <div className="contain-dropdown-elements">
        <p>{title}</p>
        <DropdownImg className="dropdown-img" />
      </div>
      <div className="hidden-dropdown-element">
        <div className="text-in-dropdown">{text}</div>
      </div>
    </div>
  );
}

export default Dropdown;
