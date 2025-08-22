import Card, { CardBody } from "./components/Card";
import List from './components/Lists';

const list = ["Goku", "Vegeta", "Bills"]
const handleSelect = (elemento: string) =>{
  console.log("Imprimiento "+elemento);
}
const handleSelect2 = (elemento: string) =>{
  console.log("Mostrando a "+elemento);
}

function App() {
  return (
  <Card>
    <CardBody title="Hola mundo" text="Cuerpo del card" buttontext="Texto del boton"/>
    <List data={list} onSelect={handleSelect2}/>
    <List data={list} onSelect={handleSelect}/>
  </Card>);
}

export default App;
