import "./ShopCard.css"
import { useState } from "react";

function ShopCard(item){
    const {id, name, price, category, setBasketItem, itemCounts, deleteElement, setBasketQuantity} = item;
    const [cartItemAmount,setCartItemAmount] = useState(itemCounts[id])

    const addQuantity = ()=>{
        setCartItemAmount(()=>(cartItemAmount + 1))
        setBasketQuantity((prev) => (prev + 1))
    }
    const removeQuantity = ()=>( cartItemAmount === 0 ? null :(setCartItemAmount(()=>(cartItemAmount - 1)), setBasketQuantity((prev) => (prev - 1))))

    const handleDelete = () => {
        setBasketQuantity((prev) => (prev - cartItemAmount))
        deleteElement(id)
    }

    
    return (
    <div>
        <div className="row-item-card">
            <h5 className="grid1">{name}</h5>
            <button onClick={removeQuantity} > - </button>
            <h5 className="grid2">{cartItemAmount}</h5>
            <button onClick={addQuantity} > + </button>
            <h5 className="grid3">{price}</h5>
            <button onClick={handleDelete}>Delete</button>
        </div>  
     </div>

    )
}

export default ShopCard