import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [searchCategory, setSearchCategory] = useState("")
  const [itemList, setItemList] = useState(items)

  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // function handleSearchChange(event) {
  //   setSearchCategory(event.target.value)
  // }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else if (selectedCategory === ""){
      return true
    }
    return item.category === selectedCategory
  
  });

  // const searchItemsDisplay = items.filter((item) => {
  //   if (searchCategory === null){
  //     return true
  //   }
  //   return item.category === searchCategory
  // })

  // const itemsToDisplay = () => {
  //   if (onCategoryChange()){
  //     return categoryToDisplay
  //   } else if (onSearchChange){
  //     return searchItemsDisplay
  //   }
  // }
  
  //how to get either case to be rendered in map?????

  function handleAddItem(item){
    setItemList([...itemList, item])

  }
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem}/>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
