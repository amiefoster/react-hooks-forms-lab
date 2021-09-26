import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react"

function ItemForm(props) {

const [formData, setFormData] = useState({
  id: uuid(), 
  name: "", 
  category: "Produce",
})


  function handleChange(event) {
    console.log(event.target.value)
    console.log(event.target.name)
    setFormData({
      ...formData, 
      [event.target.name]:event.target.value, 
   })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
  }

  
  
  
  return (
    <form className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          onChange={handleChange}
          value={formData.name}  
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={handleChange} 
          value={formData.category}
        >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button 
        type="submit" 
        onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
