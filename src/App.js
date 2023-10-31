import React, { useState } from "react";
import data from "./data.js";
import Tours from "./components/Tours.js";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (!tours.length) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Plan With Love</h2>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
