import './ItemsContainer.css'
import ItemCard from "./ItemCard"
import Basket from './Basket';
import Carousel from './Carousel';
import { useState } from "react";

function ItemsContainer ({items, search, setBasketItem, filter, setSortType}){

   

   

    // const handleChange = () => {
    //    let sorted = items.sort((a, b) => a.purchased - b.purchased);
    //    console.log(sorted)
        
    // }
    // const priceInt = parseFloat(cur.price.replaceAll(',', ''))


let filteredItems = filter === "All" ? items : items.filter((el) => el.category === filter);
    const filterItems = filteredItems.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))
    

let itemList = filterItems.map(item => (<ItemCard key={item.id} {...item} setBasketItem={setBasketItem}/>))


return (
    <div>
        <Carousel />
        <label for="sort-names">Sort by: </label>
        <select name="sort-names" id="sort-names" onChange={(e) => setSortType(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
        </select>
        {/* <h1>Items</h1> */}
        <div className="container">
            {itemList}
        </div>
    </div>

 )   
}

export default ItemsContainer


