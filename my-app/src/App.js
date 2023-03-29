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
  const [basketQuantity, setBasketQuantity] = useState(0)
  const [array, setArray] = useState([])
  


  const setBasketItem = (item) => {
  // const total = Object.entries(itemCounts).length === 0 ? 0 : Object.values(itemCounts).reduce((acc, cur) => acc + cur)
  setBasketQuantity((prev) => (prev + 1))
  
  const selected = basketItem.find((el) => el.id === item.id)
    if (selected) { 
    setItemCounts((prev) => {
      const count = prev[item.id] 
      return { ...prev, [item.id]: count + 1 };
    })
    const updatedBasket = basketItem.map((el) => {return el.id === item.id ? {...el, count: 1} : el})
    console.log(updatedBasket);
    // addItemToBasket(prev => )
  } else {
    addItemToBasket(() => [...basketItem, item]);
    setItemCounts((prev) => {return { ...prev, [item.id]: 1 }})
    
  }
}



  const deleteElement = (deletedItem)=>{
    const filteredDelete = basketItem.filter(el=> (el.id !== deletedItem))
    addItemToBasket(filteredDelete)
  }

 
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
      <NavBar setSearch={setSearch} basketQuantity={basketQuantity}/>
      <Filter items={items} setItems={setItems} handleClick={handleClick}/>
      <Routes>
          <Route path="/" element={<ItemsContainer items={items} search={search} setBasketItem={setBasketItem} filter={filter}/>}/>
          <Route path='/items/:id' element={<Item/>} />
          <Route path="/basket" element={<Basket deleteElement={deleteElement}  basketItem={basketItem} checkOut={checkOut} itemCounts={itemCounts} setBasketQuantity={setBasketQuantity} setItemCounts={setItemCounts} addItemToBasket={addItemToBasket}/>} />
          <Route path="/form" element={<NewItemForm setItems={setItems} />} />
      </Routes>
      
    </div>
  );
}

export default App;


