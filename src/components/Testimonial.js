import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {}

  return (
    <div>
      <Card review={reviews[0]} />

      <div>
        <button onClick={leftShiftHandler}>
          <FaChevronLeft />
        </button>
        <button onClick={rightShiftHandler}>
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className="bg-violet-400  text-white py-4 px-3 hover:bg-violet-500 cursor-pointer"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
