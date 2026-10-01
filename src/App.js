import "./App.css"
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

const App = () => {
  const itemTwoName = "SurfExcel"
  return (
    <div className="App">
      <h1>Hello</h1>
      <Item name="nirma"/>
      <ItemDate day="22" month="jan" year="1999"/>
      <Item name={itemTwoName}/>
      <ItemDate day="08" month="Dec" year="2025"/>      
      <Item name="Airel"/>
      <ItemDate day="15" month="May" year="2019"/>    
    </div>
  );
};

export default App;
