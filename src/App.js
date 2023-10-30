import React, { useState } from "react";
import data from "./data.js";
import Tours from "./components/Tours.js";

const App = () => {
  const [tours, setTours] = useState(data);

  return (
    <div>
      <h2>Plan With Love</h2>
      <Tours tours={tours} />
    </div>
  );
};

export default App;
