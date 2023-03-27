import SearchBar from "./SearchBar";
import Basket from "./Basket"

function NavBar({ setSearch, basketItem, checkOut, itemCounts, addItemToBasket}) {

    return(
        <div>
            <SearchBar setSearch={setSearch} />
            <Basket basketItem={basketItem} checkOut={checkOut} itemCounts={itemCounts} addItemToBasket={addItemToBasket}/>
        </div>
    )
}

export default NavBar;