import React, { useState } from "react";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right-solid.svg";

function Caroussel({ pictures }) {
  const [count, setCount] = useState(0);

  const btnPrimary = () => {
    if (count < pictures.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  const btnSecond = () => {
    if (count === 0) {
      setCount(pictures.length - 1);
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="slider">
      <img src={pictures[count]} alt="" className="slider-img" />
      <div className="btn-container">
        <button onClick={btnSecond} className="button">
          <ChevronRight />
        </button>
        <button onClick={btnPrimary} className="button">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Caroussel;
