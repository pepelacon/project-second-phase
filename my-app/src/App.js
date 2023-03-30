import './App.css';
import { Routes, Route } from "react-router-dom"
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Basket from './components/Basket';
import Filter from './components/Filter';
import Item from './components/Item';
import Carousel from './components/Carousel';


function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [basketItem, addItemToBasket] = useState([])
  const [filter, setFilter] = useState('All')
  const [toggle, setToggle] = useState(false)
  const [sortType, setSortType] = useState('default');
 

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

  const deleteElement = (deletedItem)=>{
    const filteredDelete = basketItem.filter(el=> (el.id !== deletedItem))
    addItemToBasket(filteredDelete)
}

const checkOut = () =>{
  basketItem.map((el) => {
    fetch(`http://localhost:3001/items/${el.id}`, {
      method: "PATCH",
      headers:  {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({purchased: (el.purchased + el.count)})
    })
    .then(response => response.json())
    .then(data => setToggle(!toggle))
  })
  alert("Invoices have been sent to Antonio Reid 'antonio.reid@flatironschool.com', when we receive payments, we will send your items to you")
  addItemToBasket([])
}

useEffect(()=>{
  fetchData();
},[toggle]);

const fetchData = async () => {
  const response = await fetch(
    "http://localhost:3001/items"
  );
  const data = await response.json();
  setItems(data);
};



useEffect(()=>{
  let sortedData;
  
  if (sortType === 'popularity') {
    sortedData = [...items].sort((a, b) => {return b.purchased - a.purchased});
  } else if (sortType === "price-high") {
    sortedData = [...items].sort((a, b) => parseFloat(b.price.replaceAll(',', '')) - parseFloat(a.price.replaceAll(',', '')));
  } else if (sortType === "price-low") {
    sortedData = [...items].sort((a, b) => parseFloat(a.price.replaceAll(',', '')) - parseFloat(b.price.replaceAll(',', '')));
  } else {
    sortedData = items
  }
  setItems(sortedData);
}, [sortType])


const handleClick = (param) => {
  setFilter(param)
}


console.log(sortType);
  return (
    <div className="App">
      <NavBar setSearch={setSearch} basketItem={basketItem} />
      <Filter items={items} setItems={setItems} handleClick={handleClick}/>
      {/* <Carousel /> */}
      <Routes>
          <Route path="/" element={<ItemsContainer items={items} search={search} setBasketItem={setBasketItem} filter={filter} setSortType={setSortType}/>}/>
          <Route path='/items/:id' element={<Item/>} />
          <Route path="/basket" element={<Basket deleteElement={deleteElement}  basketItem={basketItem} checkOut={checkOut} addItemToBasket={addItemToBasket}/>} />
          <Route path="/form" element={<NewItemForm setItems={setItems} />} />
      </Routes>
    </div>
  );
}

export default App;


