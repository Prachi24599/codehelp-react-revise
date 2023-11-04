import React from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = (props) => {
  let reviews = props.reviews;
  return (
    <div>
      <Card review={reviews[0]} />

      <div>
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button className="bg-violet-400  text-white py-4 px-3 hover:bg-violet-500 cursor-pointer">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
