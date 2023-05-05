import SearchBar from "./SearchBar";
import Basket from "./Basket"
import './NavBar.css'
import {Link} from "react-router-dom"
import SignUp from './SignUp';
import SignOut from './SignOut';
import { CiShoppingCart } from "react-icons/ci"
import { useAuth0 } from "@auth0/auth0-react"
import logo from "./logo.png"


function NavBar({ setSearch, basketItem }) {
const {user, isAuthenticated} = useAuth0()

const quantity = basketItem.reduce((acc, cur) => {return acc + cur.count}, 0)

if (isAuthenticated) {
    return(
        <div className="nav-bar">
            <div className="item logo">
                <img className="logo" src={logo} alt="Buy Sell"/>
            </div>
            <div className="item search">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="item sign">
                
                <Link to = {"/form"}>
                    <button>Add Product</button>
                    
                </Link>

                <div className="down">
                    <Link to = {"/basket"}>
                        <div className="count-conteiner">
                            <div className="count">
                                {quantity}
                            </div>
                            <CiShoppingCart className="icon"/>
                        </div>
                
                    </Link>
                    <SignOut />
                </div>
            </div>
        </div>
    )
} else if (!isAuthenticated) {
    return (
        <div className="nav-bar">
            <div className="item logo">
                <img className="logo" src={logo} alt="Buy Sell"/>
            </div>
            <div className="item search">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="item sign">
                <SignUp />
            </div>
        </div>
    )
}

}

export default NavBar;
