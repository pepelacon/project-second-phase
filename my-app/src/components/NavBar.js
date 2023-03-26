import SearchBar from "./SearchBar";
import Basket from "./Basket"

function NavBar({ setSearch, basketItem, checkOut}) {

  

    return(
        <div>
            <SearchBar setSearch={setSearch} />
            <Basket basketItem={basketItem} checkOut={checkOut}/>
        </div>
    )
}

export default NavBar;