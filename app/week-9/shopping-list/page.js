'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context"; // double-check path!
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json"; 

function cleanItemName(name) {
  return name.split(" ")[0].replace(",", "").toLowerCase();
}

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (user === null) {
      router.push("/week-9");
    }
  }, [user, router]);

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
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
        {/* Left Section: New Item Form & Item List */}
        <div className="flex flex-col w-1/2 bg-gray-800 p-4 rounded-lg shadow-md">
          <NewItem onAddItem={handleAddItem} />
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
