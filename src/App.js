import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDate: "24",
      itemMonth: "May",
      itemYear: "1999",
    },
    {
      itemName: "Nirma22",
      itemDate: "2422",
      itemMonth: "May22",
      itemYear: "199922",
    },
    {
      itemName: "Nirma33",
      itemDate: "2433",
      itemMonth: "May33",
      itemYear: "199933",
    },
  ];

  return (
    <Card>
      <Item className="nirma" name={response[0].itemName}>
        I am first item
      </Item>
      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      ></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      ></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      ></ItemDate>
      <div className="App">Hello</div>
      <Form />
    </Card>
  );
}

export default App;
