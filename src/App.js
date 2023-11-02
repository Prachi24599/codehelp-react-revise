import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default App;
