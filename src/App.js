import React, { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState("");
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  useEffect(() => {
    console.log("UI Rendering Done!");
  });

  return (
    <div>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default App;
