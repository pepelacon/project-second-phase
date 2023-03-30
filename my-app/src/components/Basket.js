import ShopCard from "./ShopCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Basket.css"
import {FaHome} from 'react-icons/fa'


function Basket ({basketItem, checkOut, addItemToBasket}) {

const addQuantity = (product) => {
    const updateCount = basketItem.map((el) => (el.id === product.id ? {...el, count: el.count + 1 } : el))
    addItemToBasket(updateCount)
}

const removeQuantity = (product) => {
    const removeCount = basketItem.map((el) => { return el.count > 0 && el.id === product.id ? {...el, count: el.count - 1 } : el })
    addItemToBasket(removeCount)
}

const deleteElement = (product) => {
    const deletedItem = basketItem.filter((el) => el.id !== product.id)
    addItemToBasket(deletedItem)
}

    // addItemToBasket((prev) => ({...prev, count: count + 1 }))
   const basketItemList = basketItem.map((item)=>(
    <ShopCard key={item.id} {...item} addQuantity={addQuantity} removeQuantity={removeQuantity} deleteElement={deleteElement}/> 
   )) 

    const total = basketItem.reduce((acc, cur) => {
        const priceInt = parseFloat(cur.price.replaceAll(',', ''))
        return acc + (cur.count * priceInt )
   }, 0 )


   const navigate = useNavigate()

    return(
    <div>
        <div className="basket-list">
            {basketItemList}
         </div>
         <div>
            <h3>Total Price: ${total}</h3>
        </div>
        <button onClick={checkOut}>Check Out</button>
        {/* <FaHome onClick={()=>{navigate("/")}}/> */}
        <button onClick={()=>{navigate("/")}}><FaHome/></button>
    </div>
    )
}

export default Basket;
