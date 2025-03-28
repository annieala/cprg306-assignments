"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json"; 

export default function Page() {
  //  Initialize state inside the component
  const [items, setItems] = useState(itemsData);

  //  Create an event handler function that adds a new item
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen gap-2 bg-black">
      <h1 className="text-4xl font-bold mb-6 text-gray-100">Shopping List</h1>
      <div>
        {/*  Pass handleAddItem to NewItem as a prop */}
        <NewItem onAddItem={handleAddItem} />
      </div>
      {/*  Pass items state to ItemList */}
      <ItemList items={items} />
    </div>
  );
}
