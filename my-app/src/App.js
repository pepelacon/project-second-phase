import './App.css';
import { Routes, Route } from "react-router-dom"
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Basket from './components/Basket';
import Filter from './components/Filter';
import Item from './components/Item';



function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [basketItem, addItemToBasket] = useState([])
  const [filter, setFilter] = useState('All')
 


console.log(basketItem);


const setBasketItem = (item) => {
  const selected = basketItem.find((el) => el.id === item.id)
    if (selected) { 
    const updatedBasket = basketItem.map((el) => {return el.id === item.id ? {...el, count: el.count + 1} : el})
    addItemToBasket(updatedBasket);
  } else {
    const createBasket = [...basketItem, {...item, count: 1}]
    addItemToBasket(createBasket);
  }
}

console.log(basketItem);
  const deleteElement = (deletedItem)=>{
    const filteredDelete = basketItem.filter(el=> (el.id !== deletedItem))
    addItemToBasket(filteredDelete)
}

const checkOut = () =>{
  addItemToBasket([])
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
      <NavBar setSearch={setSearch} basketItem={basketItem} />
      <Filter items={items} setItems={setItems} handleClick={handleClick}/>
      <Routes>
          <Route path="/" element={<ItemsContainer items={items} search={search} setBasketItem={setBasketItem} filter={filter}/>}/>
          <Route path='/items/:id' element={<Item/>} />
          <Route path="/basket" element={<Basket deleteElement={deleteElement}  basketItem={basketItem} checkOut={checkOut} addItemToBasket={addItemToBasket}/>} />
          <Route path="/form" element={<NewItemForm setItems={setItems} />} />
      </Routes>
      
    </div>
  );
}

export default App;


