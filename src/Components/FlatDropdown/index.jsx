import { useState } from "react";

function FlatDropdown() {
  const { open, setOpen } = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return <div></div>;
}

export default FlatDropdown;
