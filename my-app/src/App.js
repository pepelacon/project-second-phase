import './App.css';
import ItemsContainer from "./components/ItemsContainer";
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])


useEffect(()=>{
  fetch("http://localhost:5000/items")
  .then(res => res.json())
  .then(data => setItems(data)) 
},[]);

console.log(items);

  return (
    <div className="App">
      <ItemsContainer items={items}/>
    </div>
  );
}

export default App;
