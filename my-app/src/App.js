import './App.css';
import ItemsContainer from "./components/ItemsContainer";
import NewItemForm from './components/NewItemForm';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';


function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [basketItem, addItemToBasket] = useState([])
  const [count, setCount] = useState(1)

    const tempArray = basketItem.map((item)=>{
    return  {...item, quantity: count}
    })

  const setBasketItem = (clickedItem)=>{
  //   if (!tempArray.includes(clickedItem)){
  //   addItemToBasket((prev) => [...prev, clickedItem])
  //  }   else if (tempArray.includes(clickedItem)){
  //     setCount((count)=>(count + 1))
  //  }
   }

   console.log(count);
   console.log(basketItem);
   console.log(tempArray)
// setCount((count)=>(count + 1))
    // return {...prev, quantity: count}
  



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
      <NavBar setSearch={setSearch} basketItem={basketItem} checkOut={checkOut}/>
      <NewItemForm setItems={setItems} />
      <ItemsContainer items={items} search={search} setBasketItem={setBasketItem}/>
    </div>
  );
}

export default App;
