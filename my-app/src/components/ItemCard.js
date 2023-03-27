function ItemCard(item){
    const {id, name, price, category, setBasketItem, addQuatity} = item;

    
    
    return (
        <div className="row item-card">
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h3>{category}</h3>
            <button onClick={()=> setBasketItem(item)} >Add to Basket</button>
            <button>Delete</button>
        </div>  

    )
}

export default ItemCard