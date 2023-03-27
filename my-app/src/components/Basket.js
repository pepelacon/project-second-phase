import ShopCard from "./ShopCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Basket.css"


function Basket ({basketItem, checkOut, itemCounts, deleteElement, addItemToBasket}) {
 


//   console.log(itemCounts);
//   console.log(basketItem)

   const basketItemList = basketItem.map((item)=>(
    <ShopCard key={item.id} itemCounts={itemCounts} {...item} deleteElement={deleteElement} /> 
   )) 
   const navigate = useNavigate()
 
    return(
    <div>
        <div className="header">
            <h4 className="grid1">Name</h4>
            <h4 className="grid2">Quantity</h4>
            <h4 className="grid3">Price</h4>
        </div>
        <div className="basket-list">
            {basketItemList}
         </div>
         <div>
            <h3>Total Price:</h3>
        </div>
        <button onClick={checkOut}>Check Out</button>

        <button onClick={()=>{navigate("/")}}>Home Page</button>
    </div>
    )
}

export default Basket;
