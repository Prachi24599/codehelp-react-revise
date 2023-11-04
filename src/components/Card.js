import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //course if already liked
      setLikedCourses((prevState) =>
        prevState.filter((cid) => cid !== course.id)
      );
      toast.warning("Like Removed");
    } else {
      //course is not already liked so insert this course in likedCourses array
      if (likedCourses.length === 0) {
        //If array is empty
        setLikedCourses([course.id]);
      } else {
        //Non Array is not empty
        setLikedCourses((prevState) => [...prevState, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px]">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
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
