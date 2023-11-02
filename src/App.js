import React, { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState("");
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // 1: On Every Render
  // useEffect(() => {
  //   console.log("UI Rendering Done!");
  // });.

  // 2 : On First Render
  // useEffect(() => {
  //   console.log("On First Render");
  // }, []);

  // 3. On First Render + Whenevery dependency changes
  useEffect(() => {
    console.log("Change Observed");
  }, [text]);

  return (
    <div>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default App;
