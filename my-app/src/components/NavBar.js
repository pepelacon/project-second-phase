import SearchBar from "./SearchBar";
import Basket from "./Basket"
import './NavBar.css'

function NavBar({ setSearch, basketItem, checkOut, itemCounts, addItemToBasket}) {

    return(
        <div className="nav-bar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1_jXuwLxDGN4IJ9LWKmCBaICJLDfzyzdA&usqp=CAU" alt="Buy Sell"/>
            <SearchBar setSearch={setSearch} />
            <Basket basketItem={basketItem} checkOut={checkOut} itemCounts={itemCounts} addItemToBasket={addItemToBasket}/>
        </div>
    )
}

export default NavBar;