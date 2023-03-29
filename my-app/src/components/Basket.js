import ShopCard from "./ShopCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Basket.css"
import {FaHome} from 'react-icons/fa'


function Basket ({basketItem, checkOut, itemCounts, deleteElement, setBasketQuantity, setItemCounts}) {
    const [totalForItem, setTotalForItem] = useState([])
    const [totalCost, setTotal] = useState(0)

    

   const basketItemList = basketItem.map((item)=>(
    <ShopCard key={item.id} itemCounts={itemCounts} totalCost={totalCost} setItemCounts={setItemCounts} setTotal={setTotal} setTotalForItem={setTotalForItem} {...item} deleteElement={deleteElement} setBasketQuantity={setBasketQuantity}/> 
   )) 

   console.log(totalCost);

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
            <h3>Total Price: {totalCost}</h3>
        </div>
        <button onClick={checkOut}>Check Out</button>
        {/* <FaHome onClick={()=>{navigate("/")}}/> */}
        <button onClick={()=>{navigate("/")}}><FaHome/></button>
    </div>
    )
}

export default Basket;
