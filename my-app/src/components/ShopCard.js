import "./ShopCard.css"
import { useEffect, useState } from "react";


function ShopCard(item){
    const {id, name, price, setTotal, itemCounts, setItemCounts, deleteElement, setBasketQuantity, totalCost, setTotalForItem} = item;
    const [cartItemAmount,setCartItemAmount] = useState(itemCounts[id])

    const priceInt = parseFloat(price.replaceAll(',', ''))
    const [cost, setCost] = useState(priceInt)

    console.log(cost);

   
    const addQuantity = () =>{
        setCartItemAmount(()=>(cartItemAmount + 1))
        // setItemCounts((prev) => {...prev, id: itemCounts[id] + 1})
        totalCost === 0 ? setTotal( priceInt ) : setTotal((prev) => (prev + priceInt))
        setBasketQuantity((prev) => (prev + 1))
    }

    const removeQuantity = ()=>( cartItemAmount === 0 ? null :(
        setCartItemAmount(()=>(cartItemAmount - 1)), 
        setBasketQuantity((prev) => (prev - 1)),
        setTotal((prev) => (prev - priceInt))
        ))

    const handleDelete = () => {
        setBasketQuantity((prev) => (prev - cartItemAmount))
        deleteElement(id)
    }

    // const priceInt = parseFloat(price.replaceAll(',', ''))

    useEffect (()=>{
        setCost(Math.round(cartItemAmount * priceInt))
        setTotalForItem((prev) => ([...prev, cost]))
        
    },[cartItemAmount])
    

    return (
    <div>
        <div className="row-item-card">
            <h5 className="grid1">{name}</h5>
            <button onClick={removeQuantity} > - </button>
            <h5 className="grid2">{cartItemAmount}</h5>
            <button onClick={addQuantity} > + </button>
            <h6 className="grid3">${price}</h6>
            <h6 className="grid4">${cost}</h6>
            <button onClick={handleDelete}>Delete</button>
        </div>  
     </div>

    )
}

export default ShopCard