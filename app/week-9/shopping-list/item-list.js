"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // sort the items; localCompare for emojis
  const sortedItems = Array.isArray(items) ? [...items].sort((a, b) =>
    (a?.[sortBy] ?? "").localeCompare(b?.[sortBy] ?? "")
  ) : []; 

  return (
  <div className="p-3 mt-8 w-full max-w-3xl flex flex-col items-start">

      {/* create sort buttons using template literals & ternary operator*/}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          /* ${} allows for conditional assignment, 
          ` template literals for readability & flexibility ` */
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "name"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            sortBy === "category"
            /* ? : ternary operator for if else,
            if sortBy is "green" then button is green, else gray */
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* render the items */}
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>
    </div>
  );
}
