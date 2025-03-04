"use client"; 
import { useState } from "react";
import Item from "./item";
import itemsData from "items.json";



export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const[itemList, setItemList] = useState(itemsData);
  
  // sort the items - localCompare for non ACSII characters
  const sortedItems = [...itemList].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  ); 

    
  
  return (
    <div>

      <button onClick={() => setSortBy("name")}>Sort by Name</button>
      <button onClick={() => setSortBy("category")}>Sort by Category</button>
      
      <ul>"
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
