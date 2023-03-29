import SearchBar from "./SearchBar";
import Basket from "./Basket"
import './NavBar.css'
import {Link} from "react-router-dom"
import SignUp from './SignUp';
import SignOut from './SignOut';
import { CiShoppingCart } from "react-icons/ci"
import { useAuth0 } from "@auth0/auth0-react"


function NavBar({ setSearch, basketQuantity }) {
const {user, isAuthenticated} = useAuth0()

if (isAuthenticated) {
    return(
        <div className="nav-bar">
            <div className="item logo">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1_jXuwLxDGN4IJ9LWKmCBaICJLDfzyzdA&usqp=CAU" alt="Buy Sell"/>
            </div>
            <div className="item search">
                <SearchBar setSearch={setSearch} />
            </div>
            <div className="item sign">
                
                <Link to = {"/form"}>
                    <button>Add Product</button>
                    {/* <h6 className="add">Add New Product</h6> */}
                </Link>

                <div className="down">
                    <Link to = {"/basket"}>
                        <div className="count-conteiner">
                            <div className="count">
                                {basketQuantity}
                            </div>
                            <CiShoppingCart className="icon"/>
                        </div>
                        {/* <button>Basket<CiShoppingCart/></button> */}
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
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf1_jXuwLxDGN4IJ9LWKmCBaICJLDfzyzdA&usqp=CAU" alt="Buy Sell"/>
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
