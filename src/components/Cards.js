import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  //Initially all courses are not liked
  const [likedCourses, setLikedCourses] = useState([]);

  //It returns list/array of all courses received from the api response
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
