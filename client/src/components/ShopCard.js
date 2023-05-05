import "./ShopCard.css"
import { useEffect, useState } from "react";


function ShopCard(item){
    const {id, name, price, count, addQuantity, removeQuantity, deleteElement} = item;

    const priceInt = parseFloat(price.replaceAll(',', ''))
    const costElement = count * parseFloat(price.replaceAll(',', ''))
    
    return (
    <div>
        <div className="row-item-card">
            <h5 className="grid1">{name}</h5>
            <button onClick={() => removeQuantity(item)}> - </button>
            <h5 className="grid2">{count}</h5>
            <button onClick={() => addQuantity(item)}> + </button>
            <h6 className="grid3">${price}</h6>
            <h6 className="grid4">${costElement}</h6>
            <button onClick={() => deleteElement(item)}>Delete</button>
        </div>  
     </div>

    )
}

export default ShopCard