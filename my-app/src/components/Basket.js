import ItemCard from "./ItemCard";
import { useState } from "react";


function Basket ({basketItem, checkOut}) {
    // const [count, setCount] = useState(1)

    // const tempArray = basketItem.map((item)=>{
    //  return  {...item, quantity: count}
    // })

    // const countedAmount = basketItem.reduce((item, current)=>{
    //     if (current in item){
    //         setCount((prev)=>(prev + 1))
    //     } return item
    // }, {})

   
    


   const basketItemList = basketItem.map((item)=>(
    <ItemCard key={item.id} {...item} /> 
   )) 

  

    return(
        <div>
         {basketItemList}
        <button onClick={checkOut}>Check Out</button>
        </div>
    )
}

export default Basket;
