import ShopCard from "./ShopCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Basket ({basketItem, checkOut, itemCounts, addItemToBasket}) {
    const [counter, setCounter] = useState(0)

//   console.log(itemCounts);
//   console.log(basketItem)

   const basketItemList = basketItem.map((item)=>(
    <ShopCard key={item.id} itemCounts={itemCounts} {...item} /> 
   )) 
   const navigate = useNavigate()
 
    return(
        <div>
         {basketItemList}
        <button onClick={checkOut}>Check Out</button>

        <button onClick={()=>{navigate("/")}}>Home Page</button>
        </div>
    )
}

export default Basket;
