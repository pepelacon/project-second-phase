import './App.css';
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';


function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [basketItem, addItemToBasket] = useState([])
  const [itemCounts, setItemCounts] = useState({ });


   const setBasketItem = (item) => {
    const selected = basketItem.find((el) => el.id === item.id)
    if (selected) { 
      setItemCounts((prev) => {
        const count = prev[item.id] || 1;
        return { ...prev, [item.id]: count + 1 };
      })
    } else {
      addItemToBasket(() => [...basketItem, item]);
    }}

    // const match = basketItem.some((item1) => itemCounts.some((item2) => item2.id === item1.id))
    // console.log(match);
  const checkOut = () =>{
    addItemToBasket([])
  }

useEffect(()=>{
  fetch("http://localhost:3001/items")
  .then(res => res.json())
  .then(data => setItems(data)) 
},[]);


  return (
    <div className="App">
      <NavBar setSearch={setSearch} 
        basketItem={basketItem} 
        itemCounts={itemCounts} 
        checkOut={checkOut} 
        addItemToBasket={addItemToBasket}
      />
      <NewItemForm setItems={setItems} />
      <ItemsContainer items={items} search={search} setBasketItem={setBasketItem}/>
    </div>
  );
}

export default App;
