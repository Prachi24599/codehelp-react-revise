import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

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
      <div>
        <FaQuoteLeft />
      </div>
      <div>{review.text}</div>
      <div>
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
