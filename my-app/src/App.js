import './App.css';
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';


function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")


useEffect(()=>{
  fetch("http://localhost:3001/items")
  .then(res => res.json())
  .then(data => setItems(data)) 
},[]);


  return (
    <div className="App">
      <NavBar setSearch={setSearch} />
      <NewItemForm setItems={setItems} />
      <ItemsContainer items={items} search={search}/>
    </div>
  );
}

export default App;
