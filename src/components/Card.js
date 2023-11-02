import React from "react";

const Card = ({ course }) => {
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.image.alt} />
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
