"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");
    const [quantity, setQuantity] = useState(1); // useState(1) - set the quantity initially to 1
    const [addedItems, setAddedItems] = useState([]);

    // increments function that increments the quantity state variable by 1 & does not exceed 20.
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };
    
    // decrements the quantity state variable by 1 & quantity does not go below 1. 
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        const item = { name, category, quantity };
        onAddItem(item);
      
        // ✅ Append new item to the list
        setAddedItems((prev) => [...prev, item]);
      
        // Reset form fields
        setName("");
        setCategory("Produce");
        setQuantity(1);
      };
      
      

    return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-pink-300 mb-4">Add New Item</h2>    
    <div className="bg-black text-pink-300 h-auto flex flex-col items-center justify-start p-2 space-y-4 rounded-lg shadow-md">
    {/* name field */}
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(n) => setName(n.target.value)}
                className="w-full max-w-md p-3 border border-pink-300 bg-black text-pink-300 rounded-md focus:ring-2 focus:ring-pink-500"
            />

            {/* grid for quantity and category */}
            <div className="w-full max-w-md flex justify-between mt-4 space-x-2">
                {/* increment & decrement quantity */}
                <div className="flex items-center bg-black p-2 rounded-lg shadow-md border border-pink-300">
                    <button 
                        className="h-8 w-8 flex items-center justify-center font-extrabold border border-pink-300 rounded-md text-pink-300 bg-gray-800 hover:bg-pink-300 hover:text-black transition duration-200"
                        onClick={decrement}
                    >
                        -
                    </button>
                    <p className="mx-3 text-lg font-semibold">{quantity}</p>
                    <button 
                        className="h-8 w-8 flex items-center justify-center font-extrabold border border-pink-500 rounded-md text-pink-500 bg-black hover:bg-pink-500 hover:text-black transition duration-200"
                        onClick={increment}
                    >
                        +
                    </button>
                </div>

                {/* category field */}
                <select
                    value={category}
                    onChange={(p) => setCategory(p.target.value)}
                    className="p-2 border border-pink-300 bg-black text-pink-300 rounded-md focus:ring-2 focus:ring-pink-500"
                >
                    <option value="Produce">Produce 🥦</option>
                    <option value="Dairy">Dairy 🥛</option>
                    <option value="Meat">Meat 🥓</option>
                    <option value="Frozen Foods">Frozen Foods 🍦</option>
                    <option value="Canned Goods">Canned Goods 🥫</option>
                    <option value="Dry Goods">Dry Goods 🍘</option>
                    <option value="Beverages">Beverages 🍹</option>
                    <option value="Bakery">Bakery 🎂</option>
                    <option value="Snacks">Snacks 🍫</option>
                    <option value="Household">Household 🧼</option>
                    <option value="Other">Other ...</option>
                </select>
            </div>

            {/* submit button */}
            <button
            
                onClick={handleSubmit}
                className="mt-6 w-full max-w-md px-6 py-3 font-bold border-2 border-pink-500 bg-pink-500 text-black rounded-md hover:bg-pink-300 hover:border-pink-300 transition duration-200">
                +
            </button>
            
            {addedItems.length > 0 && (
            <div className="mt-6 w-full max-w-md text-pink-300">
                <h3 className="text-lg font-bold mb-2">Recently Added Items:</h3>
                <ul className="space-y-1 list-disc list-inside">
                {addedItems.map((item, index) => (
                    <li key={index}>
                    {item.name} — {item.category} — Qty: {item.quantity}
                    </li>
                ))}
                </ul>
            </div>
            )}

        </div>
        </form>
        
    );
    
};

export default NewItem;

