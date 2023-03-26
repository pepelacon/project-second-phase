function ItemCard(item){
    const {name, price, category, setBasketItem} = item;

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