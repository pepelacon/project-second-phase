import {useState} from "react"
import "./NewItemForm.css"
import { useNavigate } from "react-router-dom"
import {FaHome} from 'react-icons/fa'



function NewItemForm({ setItems }) {
  const navigate = useNavigate()

    const initialObject = {
    name: "",
    description: "",
    price: "",
    rating: 0,
    image: "",
    category: ""
   }
   const [newObject, setNewObject] = useState(initialObject)

   const handleChange = (e) =>{
    const {name, value} = e.target
    setNewObject((prev) => {
      return{
        ...prev, [name]:value
      }
    })
   }

   const configObjPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObject)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/items',configObjPost)
    .then((resp) => resp.json())
    .then(() => {
      setItems((prev) => [...prev, newObject])
      navigate("/")
    })
   }


    return(
        <section className="section-form">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="subtitle">
            <h3>Add New Product</h3>
          </div>
        
        <label htmlFor="name" >Product Name</label>
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value= {newObject.name}
        />

        <label htmlFor="about">Description</label>
        <textarea
          className="form-input textarea" 
          id="description"
          name="description"
          onChange={handleChange}
          value= {newObject.description}
        />


        <label htmlFor="about">Price</label>
        <input
          className="form-input"
          type= "text"
          id="price"
          name="price"
          onChange={handleChange}
          value= {newObject.price}
        />

        <label htmlFor="category">Category</label>
        <select
          className="form-input"
          name="category"
          id="category"
          onChange={handleChange}
          value={newObject.category}
        >
          <option value="">Pick a Category</option>
          <option value="Home Goods">Home Goods</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Sports">Sports</option>
          <option value="Books">Books</option>
        </select>

        <label htmlFor="image">Picture</label>
        <input
          className="form-input"
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={newObject.image}
        />

        <button className="button" type="submit">Add Product</button>
        <br />
        <button className="home" onClick={()=>{navigate("/")}}><FaHome/></button>
      </form>
     
    </section>
    )
}

export default NewItemForm;

