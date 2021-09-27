import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [searchCategory, setSearchCategory] = useState("")
 const [searchItem, setSearchItem] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value, true);
    // console.log('category change', event.target.value)
  }

  function handleSearch(event){
    setSearchItem(event.target.value)
  }

///////////////////////////////////////


  const displayFilter = items.filter((item) => {
    
    if (item.name.toLowerCase().includes(searchItem.toLowerCase())){
        return(item) }
  else {
      return item.category === selectedCategory
    }
  
  });

  let displayItems = selectedCategory!=="All" || searchItem!=="testing"? displayFilter : items

  ///////////////////////////////////////
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter search={searchItem} onDropdownChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
