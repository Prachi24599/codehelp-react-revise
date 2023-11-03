import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {}
  return (
    <div className="w-[300px]">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
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
