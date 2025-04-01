'use client';

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context"; // double-check path!
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service"; // double-check path!



function cleanItemName(name) {
  return name.split(" ")[0].replace(",", "").toLowerCase();
}

export default function Page() {
  const { user } = useUserAuth();
  




  // ✅ Define the loadItems function
  async function loadItems() {
    if (user?.uid) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  }

  // ✅ Call it when the component mounts or when user changes
  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (newItem) => {
    if (!user?.uid) return;
  
    const newItemId = await addItem(user.uid, newItem);
    const itemWithId = { ...newItem, id: newItemId };
  
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  const handleItemSelect = (item) => {
    if (item && item.name) {
      const cleanedName = cleanItemName(item.name);
      setSelectedItemName(cleanedName);
    }
  };

  // Optionally show a loading screen while checking user
  if (user === null) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-white text-xl">Redirecting...</p>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-black p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-100">Shopping List</h1>
      <div className="flex w-full max-w-5xl gap-6">
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} (Qty: {item.quantity})</li>
        ))}
      </ul>
        {/* Left Section: New Item Form & Item List */}
        <div className="flex flex-col w-1/2 bg-gray-800 p-4 rounded-lg shadow-md">
        <NewItem user={user} onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/* Right Section: Meal Ideas */}
        <div className="flex w-1/2 bg-gray-800 p-4 rounded-lg shadow-md">
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="text-gray-300">Select an item to see meal ideas</p>
          )}
        </div>
      </div>
    </div>
  );
}
