import "./App.css"
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Item/>
      <ItemDate/>
      <Item/>
      <ItemDate/>
      <Item/>
      <ItemDate/>
    </div>
  );
};

export default App;
