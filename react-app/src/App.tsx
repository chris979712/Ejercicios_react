import Card, { CardBody } from "./components/Card";
import List from './components/Lists';
import Button, { ButtonAdditionSubstraction, ButtonChargeBody, ButtonChargingBody } from "./components/ButtonCharge";
import { useState } from "react";

function App() {

  let selectedCharacter : string = 'Goku';
  const [list, setList ] = useState<string[]>(["Goku","Vegeta","Bulma"]);

  const handleSelect = (elemento: string) =>{
    console.log("Mostrando a "+elemento);
    selectedCharacter = elemento;
  }

  const [isLoading, setIsLoading] = useState(false);

  const handleClickButton = () => {
    setIsLoading(!isLoading); 
  };

  const handleAdditionButton = () => {
    const lastIndex = list.length;
    setList(prevList => [...prevList, `minion ${lastIndex}`]);
    console.log('minion');
  };

  const handleRemoveButton = () => {
    const selected = selectedCharacter;
    const index = list.lastIndexOf(selected);
    if (index !== -1) {
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
    }
  }

  return (
  <>
    <Card>
      <CardBody title="Hola mundo" text="Cuerpo del card" buttontext="Texto del boton"/>
      {list.length !== 0 ?
        <List data={list} onSelect={handleSelect}/>
        : "No hay contenido por mostrar"}
      <Button>
        {
          isLoading === false
            ? (<ButtonChargeBody onClick={handleClickButton} disabled={false} />)
            : (<ButtonChargingBody disabled={true} />)
        }
      </Button>
    </Card>
    <Card>
      <h3 style={{textAlign: 'center', textWrap: 'wrap', fontFamily: 'fantasy'}}>Agrega o elimina elementos a la lista</h3>
      <Button>
        <div style={{display: 'flex', gap: '10px', justifyContent:'center', width: '300px', height: '100px'}}>
          <ButtonAdditionSubstraction onClick={handleAdditionButton} textButton="Agregar minion"/>
          <ButtonAdditionSubstraction onClick={handleRemoveButton} textButton="Eliminar minion"/>
        </div>
        <List data={list} onSelect={handleSelect}/>
      </Button>
    </Card>
  </>
  );
}

export default App;
