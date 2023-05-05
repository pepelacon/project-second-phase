

function Filter({ handleClick }) {

    return(
        <div className="filter-buttons">
                <button onClick={() => {handleClick('All')}}>All</button>
                <button onClick={() => {handleClick('Sports')}}>Sports</button>
                <button onClick={() => {handleClick('Fashion')}}>Fashion</button>
                <button onClick={() => {handleClick('Home Goods')}}>Home Goods</button>
                <button onClick={() => {handleClick('Electronics')}}>Electronics</button>
                <button onClick={() => {handleClick('Books')}}>Books</button>
        </div>
    )
}

export default Filter;