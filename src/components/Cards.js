import React from "react";

const Cards = ({ courses }) => {
  let allCourses = [];

  //It returns list/array of all courses received from the api response
  const getCouses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return <div>Cards</div>;
};

export default Cards;
