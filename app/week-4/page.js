"use client";

import { useState } from "react";

const NewItem = () => {
    const [quantity, setQuantity] = useState(1); // useState(1) - set the quantity initially to 1

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
    

    return (
        <div className="bg-black text-pink-300 h-screen flex flex-row items-center justify-center p-6">
        <button className="h-5 w-8 flex items-center justify-center font-extrabold border-2 border-pink-300 rounded-[5px] p-3 text-pink-300" onClick = {decrement}> - </button>
        <p className="font-extrabold p-6">{quantity}</p>
            <button className="h-5 w-8 flex items-center justify-center font-extrabold border-2 border-pink-300 rounded-[5px] p-3 text-pink-300" onClick={increment}> + </button>
        </div>
    );
    
};

export default NewItem;
