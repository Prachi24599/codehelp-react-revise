import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const itemTwoName = "Ghadi";
  return (
    <>
      <Item name="Nirma"></Item>
      <ItemDate day="24" month="May" year="1999"></ItemDate>
      <Item name={itemTwoName}></Item>
      <ItemDate day="15" month="Dec" year="2020"></ItemDate>
      <Item name="SurfExcel"></Item>
      <ItemDate day="01" month="April" year="1980"></ItemDate>
      <div className="App">Hello</div>;
    </>
  );
}

export default App;
