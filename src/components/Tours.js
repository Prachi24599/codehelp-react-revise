import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map(function (tour) {
        return <Card key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
