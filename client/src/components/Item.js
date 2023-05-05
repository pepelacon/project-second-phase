import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Item.css"


function Item() {
    const [bigCard, setBigCard] = useState({})
    
    let {id} = useParams()
    const {name, image, category, price, description} = bigCard

    const navigate = useNavigate()
    
    useEffect(() => {
        console.log(id)
        fetch(`http://localhost:3001/items/${id}`)
        .then((resp) => resp.json())
        .then((data) => setBigCard(data))
    }, [id])

    return(
        <div className="single-card" >
            <div >
                <img className="single-card-img" src={image} alt={name} onClick={() => navigate('/')}/>
            </div>
            <div className="single-card-info">
                <div className='single-title'>
                    <h3 className="single-text-title">{name} </h3>
                </div>
                <div className='ingle-text-body'>
                    <p>{description}</p>
                </div>
            </div>
            <div className="single-card-footer">
                <span className="single-text-price">Price: ${price}</span>
                <span>Category: {category}</span>
            </div>
        </div>  
    )
}

export default Item;