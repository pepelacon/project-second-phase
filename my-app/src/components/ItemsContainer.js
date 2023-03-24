import ItemCard from "./ItemCard"



function ItemsContainer ({items}){

const itemList = items.map(item => (<ItemCard key={item.id} {...item}/>))

return (
    <div className="container">
        <h1>Items</h1>
        {itemList}
    </div>

 )   
}

export default ItemsContainer