import React from "react";

const Card = ({ review }) => {
  return (
    <div>
      <div>
        <img src={review.image} alt="review-img" />
      </div>
      <div>
        <p>{review.name}</p>
      </div>
      <div>
        <p>{review.job}</p>
      </div>
    </div>
  );
};

export default Card;
