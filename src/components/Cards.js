import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
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
    <div>
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Cards;
