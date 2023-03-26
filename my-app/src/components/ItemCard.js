function ItemCard(item){
    const {name, price, category, description} = item;
    return (
        <div className="row item-card">
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h3>{category}</h3>
            <button>Add to Basket</button>
            <button>Delete</button>
        </div>  

    )
}

export default ItemCard