import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {
  return (
    <div className="w-[300px]">
      <div>
        <img src={course.image.url} alt={course.image.alt} />
        <button>
          <FcLike />
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
//FcLikePlaceholder
