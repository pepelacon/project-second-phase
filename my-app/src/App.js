import './App.css';
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])


useEffect(()=>{
  fetch("http://localhost:3001/items")
  .then(res => res.json())
  .then(data => setItems(data)) 
},[]);


  return (
    <div className="App">
      <NewItemForm setItems={setItems} />
      <ItemsContainer items={items}/>
    </div>
  );
}

export default App;
