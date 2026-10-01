import "./App.css"
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

const App = () => {
  // const itemTwoName = "SurfExcel"
  const response = [
    {
      itemName : "Nirma",
      itemDate : "22",
      itemMonth : "April",
      itemYear : "1999"
    },
    {
      itemName : "SurfExcel",
      itemDate : "12",
      itemMonth : "Dec",
      itemYear : "2026"
    },
    {
      itemName : "Airel",
      itemDate : "06",
      itemMonth : "August",
      itemYear : "2026"
    }
  ]
  return (
    <div className="App">
      <h1>Hello</h1>
      <Item name={response[0].itemName}>
        This is Data passed inside components
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}/>
      <Item name={response[1].itemName}/>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}/>   
      <Item name={response[2].itemName}/>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}/>
    </div>
  );
};

export default App;
