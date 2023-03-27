import './ItemsContainer.css'
import ItemCard from "./ItemCard"

function ItemsContainer ({items, search, setBasketItem}){



    const filterItems = items.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))
    
const itemList = filterItems.map(item => (<ItemCard key={item.id} {...item} setBasketItem={setBasketItem}/>))

return (
    <div >
        <h1>Items</h1>
        <div className="container">
            {itemList}
        </div>
    </div>

 )   
}

export default ItemsContainer


