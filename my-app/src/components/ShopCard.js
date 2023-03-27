function ShopCard(item){
    const {id, name, price, category, setBasketItem, itemCounts, addQuatity} = item;
    const cartItemAmount = itemCounts[id]

    return (
        <div className="row item-card">
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h3>{category}</h3>
            <p>{cartItemAmount}</p>
            <button onClick={()=> setBasketItem(item)} >Add to Basket</button>
            <button>Delete</button>
        </div>  

    )
}

export default ShopCard