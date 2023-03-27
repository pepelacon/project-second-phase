import "./NavBar.css"


function SearchBar({ setSearch }) {

    function handleChange(e) {
        setSearch(e.target.value)
    }

    return(
        <div>
            <input className="search" type="text" placeholder="Search..." onChange={handleChange} >

            </input>
        </div>
    )
}

export default SearchBar;