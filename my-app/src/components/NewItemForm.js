import {useState} from "react"

function NewItemForm() {
    const initialObject = {
    name: "",
    about: "",
    price: "",
    rating: 0,
    image: "",
    category: ""
   }
   const [newObject, setNewObject] = useState(initialObject)

   const handleChange = (e) =>{
    
   }


    return(
        <section>
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Product</h3>

        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value= {newObject.name}
        />

        <label htmlFor="about">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value= {newObject.description}
        />

        <label htmlFor="about">Price</label>
        <input
          type= "text"
          id="price"
          name="price"
          onChange={handleChange}
          value= {newObject.price}
        />

        <label htmlFor="phase">Category</label>
        <select
          name="phase"
          id="phase"
          onChange={handleChange}
          value={newObject.category}
        >
          <option value="">Pick a Category</option>
          <option value="1">Home Goods</option>
          <option value="2">Electronics</option>
          <option value="3">Fashion</option>
          <option value="4">Sports</option>
          <option value="5">Books</option>
        </select>

        <label htmlFor="image">Picture</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={newObject.image}
        />

        <button type="submit">Add Product</button>
      </form>
    </section>
    )
}

ex
