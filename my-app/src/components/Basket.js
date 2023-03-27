import ShopCard from "./ShopCard";
import { useState } from "react";


function Basket ({basketItem, checkOut, itemCounts, addItemToBasket}) {
    const [counter, setCounter] = useState(0)

  console.log(itemCounts);

   const basketItemList = basketItem.map((item)=>(
    <ShopCard key={item.id} itemCounts={itemCounts} {...item} /> 
   )) 
 
    return(
        <div>
         {basketItemList}
        <button onClick={checkOut}>Check Out</button>
        </div>
    )
}

export default Basket;
