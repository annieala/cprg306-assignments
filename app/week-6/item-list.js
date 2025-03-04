"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // sort the items; localCompare for emojis
  const sortedItems = [...itemsData].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="p-6">

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
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
