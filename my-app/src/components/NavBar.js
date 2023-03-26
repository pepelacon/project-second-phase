import SearchBar from "./SearchBar";

function NavBar({ setSearch }) {
    return(
        <div>
            <SearchBar setSearch={setSearch} />
        </div>
    )
}

export default NavBar;