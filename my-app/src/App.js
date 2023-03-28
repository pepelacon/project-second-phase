import './App.css';
import { Routes, Route } from "react-router-dom"
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Basket from './components/Basket';
import Filter from './components/Filter';
import Item from './components/Item';
// import "semantic-ui-css/semantic.min.css";


function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [basketItem, addItemToBasket] = useState([])
  const [itemCounts, setItemCounts] = useState({ });
  const [filter, setFilter] = useState('All')


  const setBasketItem = (e, item) => {
    e.preventDefault()
  const selected = basketItem.find((el) => el.id === item.id)
    if (selected) { 
    setItemCounts((prev) => {
      const count = prev[item.id] 
      return { ...prev, [item.id]: count + 1 };
    })
  } else {
    addItemToBasket(() => [...basketItem, item]);
    setItemCounts((prev) => {return { ...prev, [item.id]: 1 }})
  }}

 
  const checkOut = () =>{
    addItemToBasket([])
    setItemCounts({})
  }

useEffect(()=>{
  fetch("http://localhost:3001/items")
  .then(res => res.json())
  .then(data => setItems(data)) 
},[]);


const handleClick = (param) => {
  setFilter(param)
}


  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>
      <Filter items={items} setItems={setItems} handleClick={handleClick}/>
      <Routes>
          <Route path="/" element={<ItemsContainer items={items} search={search} setBasketItem={setBasketItem} filter={filter}/>}/>
          <Route path='/items/:id' element={<Item/>} />
          <Route path="/basket" element={<Basket basketItem={basketItem} checkOut={checkOut} itemCounts={itemCounts} addItemToBasket={addItemToBasket}/>} />
          <Route path="/form" element={<NewItemForm setItems={setItems} />} />
      </Routes>
      
    </div>
  );
}

export default App;


