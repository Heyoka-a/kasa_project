import React, { useState } from "react";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";

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
          <ChevronRight className="chevron-caroussel" />
        </button>
        <button onClick={btnPrimary} className="button">
          <ChevronRight className="chevron-caroussel" />
        </button>
      </div>
      <div className="number-of-img">
        <span>
          {count + 1}/{pictures.length}
        </span>
      </div>
    </div>
  );
}

export default Caroussel;
