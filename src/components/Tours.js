import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map(function (tour, index) {
        return <Card key={index} {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
