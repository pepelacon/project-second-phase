import SearchBar from "./SearchBar";
import Basket from "./Basket"
import './NavBar.css'
import {Link} from "react-router-dom"
import SignUp from './SignUp';
import SignOut from './SignOut';
import { useAuth0 } from "@auth0/auth0-react"
function NavBar({ setSearch, basketItem, checkOut, itemCounts, addItemToBasket}) {
const {user, isAuthenticated} = useAuth0()


if (isAuthenticated) {
    return(
        <div className="nav-bar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1_jXuwLxDGN4IJ9LWKmCBaICJLDfzyzdA&usqp=CAU" alt="Buy Sell"/>
            <SearchBar setSearch={setSearch} />
            <SignOut />
            <Link to = {"/form"}>
                <button>Add New Product</button>
            </Link>
            <Link to = {"/basket"}>
                <button>Basket</button>
            </Link>
        </div>
    )
} else if (!isAuthenticated) {
    return (
        <div className="nav-bar">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1_jXuwLxDGN4IJ9LWKmCBaICJLDfzyzdA&usqp=CAU" alt="Buy Sell"/>
            <SearchBar setSearch={setSearch} />
            <SignUp />
        </div>
    )
}

}

export default NavBar;
