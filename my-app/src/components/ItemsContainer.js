import ItemCard from "./ItemCard"

function ItemsContainer ({items, search}){

    const filterItems = items.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))
    
const itemList = filterItems.map(item => (<ItemCard key={item.id} {...item}/>))

return (
    <div className="container">
        <h1>Items</h1>
        {itemList}
    </div>

 )   
}

export default ItemsContainer