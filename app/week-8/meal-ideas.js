"use client";
import { useState, useEffect } from "react";


 const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`); 
       
        return response.json();
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};


const Ingredient = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient); 
            
            setMeals(fetchedMeals.meals || []);
        }
    };

    // const handleOnClick = async (mealName) => {
    //     const fetchedMeals = await fetchMealIdeas(ingredient.mealName);
    //     setMeals(fetchedMeals.meals);
        
        
    // };
    

    useEffect(() => {
    
        loadMealIdeas();
    }, [ingredient]);

    return (
        <section className="bg-gray-900 p-4 m-4 rounded-lg">
        <p className="font-bold space-x-2 text-gray-100">{ingredient}</p>
        {/* <p className="font-thin text-gray-100">Buy {ingredient.quantity} in {ingredient.category}</p> */}

        <div className="mt-4">
            <h3 className = "text-md font-semibold"> Meal Ideas:</h3>
            {meals.length > 0 ? (
                <ul className="mt-2 list-disc list-inside">
                    {meals.map((meal) => (
                            <li key={meal.idMeal} className ="text-gray-200 font-medium">{meal.strMeal}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-200">No meal ideas found. </p>
            )}
            </div>
        </section>

        
    );
 };

 export default Ingredient;