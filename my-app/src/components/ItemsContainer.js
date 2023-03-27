import './ItemsContainer.css'
import ItemCard from "./ItemCard"
import Basket from './Basket';

function ItemsContainer ({items, search, setBasketItem, filter}){

const filteredItems = filter === "All" ? items  : items.filter((el) => el.category === filter);
    const filterItems = filteredItems.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))
    
const itemList = filterItems.map(item => (<ItemCard key={item.id} {...item} setBasketItem={setBasketItem}/>))

return (
    <div>
        <h1>Items</h1>
        <div className="container">
            {itemList}
        </div>
    </div>

 )   
}

export default ItemsContainer


