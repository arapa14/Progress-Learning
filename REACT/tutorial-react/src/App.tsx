import ListGroup from './components/ListGroup';

function App() {
  const items = [
    "Jakarta",
    "Tanggerang",
    "Padang",
    "Bandung",
    "Bogor"
  ];

  return <div><ListGroup items={items} heading={"Cities"}/></div>
}

export default App;