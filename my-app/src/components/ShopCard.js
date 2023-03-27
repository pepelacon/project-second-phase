import "./ShopCard.css"
import { useState } from "react";

function ShopCard(item){
    const {id, name, price, category, setBasketItem, itemCounts, deleteElement} = item;
    const [cartItemAmount,setCartItemAmount] = useState(itemCounts[id])

    const addQuantity = ()=>{
        setCartItemAmount(()=>(cartItemAmount + 1))
    }
    const removeQuantity = ()=>( cartItemAmount === 0 ? null : setCartItemAmount(()=>(cartItemAmount - 1)))

    
    return (
    <div>
        <div className="row-item-card">
            <h5 className="grid1">{name}</h5>
            <button onClick={removeQuantity} > - </button>
            <h5 className="grid2">{cartItemAmount}</h5>
            <button onClick={addQuantity} > + </button>
            <h5 className="grid3">{price}</h5>
            <button onClick={()=>deleteElement(id)}>Delete</button>
        </div>  
     </div>

    )
}

export default ShopCard